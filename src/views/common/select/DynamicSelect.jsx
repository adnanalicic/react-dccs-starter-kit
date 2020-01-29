import React from "react";
import masterDataService from "../service/MasterDataService";

export default class DynamicSelect extends React.Component {
  state = { items: [], selectedItem: null };

  constructor(params) {
    super(params);
    this.updateStateAction = this.updateStateAction.bind(this);
    masterDataService.fetchData(this.props.name, this.updateStateAction);
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
          className="dynamic-select"
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
