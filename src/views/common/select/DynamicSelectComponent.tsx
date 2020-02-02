/** 
  Copyright (c) 2020 DCCS Tuzla. All rights reserved.
  Implemented 2020 by DCCS Tuzla.

  @author: Adnan Alicic
*/

import React from "react";
import masterDataService from "../service/MasterDataService";
import MasterDataElementType from "../types/MasterDataElementType";

interface DynamicSelectProps {
  name: string;
  serviceName: string;
  value?: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Select input component with dynamic data fetched from REST API.
 * @param  {String} name name of rest endpoint
 * @param  {String} value preselected value
 * @param  {Function} onChange event executed on select change
 */
export default class DynamicSelectComponent extends React.Component<
  DynamicSelectProps
> {
  state = { items: [], selectedItem: null };

  constructor(props: DynamicSelectProps) {
    super(props);
    masterDataService
      .fetchData(props.serviceName)
      .then(data => this.updateStateAction(data));
  }

  updateStateAction(data: MasterDataElementType) {
    this.setState({ items: data });
  }

  render() {
    let options = this.state.items.map((data: MasterDataElementType) => (
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
