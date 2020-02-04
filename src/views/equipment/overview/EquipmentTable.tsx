/** 
  Copyright (c) 2020 DCCS Tuzla. All rights reserved.
  Implemented 2020 by DCCS Tuzla.

  @author: Adnan Alicic
*/

import React from "react";
import DynamicSelectComponent from "../../common/select/DynamicSelectComponent";
import EquipmentType from "../../common/types/EquipmentType";

interface EquipmentTableProps {
  editAction: (id: string) => void;
  data: EquipmentType[];
}
interface EquipmentTableState {
  fullData: EquipmentType[];
}

interface TableFilter {
  [key: string]: string;
}
export default class EquipmentTable extends React.Component<
  EquipmentTableProps
> {
  state = {
    equipment: [],
    fullData: [],
    filters: new Map<string, string>()
  };

  filterTable = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let filters: Map<string, string> = this.state.filters;
    filters.set(
      event.target.name,
      event.target.options[event.target.selectedIndex].text
    );
    this.setState({ filters: filters });
    let data = this.state.fullData;
    filters.forEach((value: string, filterName: string) => {
      console.log(filterName, value);
      if (filters.get(filterName) === null || filters.get(filterName) === "") {
        return;
      }
      data = data.filter(function(equipmentItem) {
        return equipmentItem[filterName]["value"] === filters.get(filterName);
      });
    });

    this.setState({ ...this.state, equipment: data });
  };

  static getDerivedStateFromProps(
    nextProps: EquipmentTableProps,
    prevState: EquipmentTableState
  ) {
    if (nextProps.data !== prevState.fullData) {
      return { equipment: nextProps.data, fullData: nextProps.data };
    }

    return nextProps;
  }

  buildTableRow(item: EquipmentType) {
    return (
      <tr key={item.id}>
        <td>
          <button onClick={() => this.props.editAction(item.id)}>edit</button>
        </td>
        <td>{item.employee !== undefined ? item.employee.value : ""}</td>
        <td>
          {item.equipmentType !== undefined ? item.equipmentType.value : ""}
        </td>
        <td>{item.manufactor !== undefined ? item.manufactor.value : ""}</td>
        <td>{item.model}</td>
        <td>{item.serialNumber}</td>
        <td>{item.invoiceDate}</td>
        <td>{item.guarantee}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="equipmentTable">
        <thead>
          <tr>
            <td></td>
            <td>
              <span>Name</span>
              <DynamicSelectComponent
                name="employee"
                serviceName="employees"
                onChange={this.filterTable}
              />
            </td>
            <td>
              <span>Type</span>
              <DynamicSelectComponent
                name="equipmentType"
                serviceName="equipmentTypes"
                onChange={this.filterTable}
              />
            </td>
            <td>
              <span>Manufactor</span>
              <DynamicSelectComponent
                name="manufactor"
                serviceName="manufactors"
                onChange={this.filterTable}
              />
            </td>
            <td>Model</td>
            <td>Serial number</td>
            <td>Invoice date</td>
            <td>Warranty</td>
          </tr>
        </thead>
        <tbody>
          {this.state.equipment.map(item => this.buildTableRow(item))}
        </tbody>
      </table>
    );
  }
}
