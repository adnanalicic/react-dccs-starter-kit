import React from "react";
import masterDataService from "../service/MasterDataService";
import { DynamicSelectDataItem } from "../types/DynamicSelectDataItem";

interface DynamicSelectProps {
  name: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Select input component with dynamic data fetched from REST API.
 * @param  {String} name name of rest endpoint
 * @param  {String} value preselected value
 * @param  {Function} onChange event executed on select change
 */
export default class DynamicSelect extends React.Component<DynamicSelectProps> {
  state = { items: [], selectedItem: null };

  constructor(props: DynamicSelectProps) {
    super(props);
    masterDataService
      .fetchData(props.name)
      .then(data => this.updateStateAction(data));
  }

  updateStateAction(data: DynamicSelectDataItem) {
    this.setState({ items: data });
  }

  render() {
    let options = this.state.items.map((data: DynamicSelectDataItem) => (
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
          <option value=""></option>
          {options}
        </select>
      </div>
    );
  }
}
