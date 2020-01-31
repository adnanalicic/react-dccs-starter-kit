import React from "react";
import masterDataService from "../service/MasterDataService";

/**
 * Select input component with dynamic data fetched from REST API.
 * @param  {String} name name of rest endpoint
 * @param  {String} value preselected value
 * @param  {Function} onChange event executed on select change
 */
export default class DynamicSelect extends React.Component {
  state = { items: [], selectedItem: null };

  constructor(params) {
    super(params);
    masterDataService
      .fetchData(this.props.name)
      .then(data => this.updateStateAction(data));
  }

  updateStateAction(data) {
    this.setState({ items: data });
  }

  render() {
    let options = this.state.items.map(data => (
      <option value={data.id} key={data.id}>
        {data.value}
      </option>
    ));

    return (
      <div>
        <select
          className="dynamicSelect"
          onChange={this.props.onChange}
          value={this.props.value}
          name={this.props.name}
        >
          <option value={null}>{null}</option>
          {options}
        </select>
      </div>
    );
  }
}
