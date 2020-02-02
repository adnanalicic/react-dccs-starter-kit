import React from "react";
import DynamicSelect from "../../common/select/DynamicSelect";
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
    filters: Array<TableFilter>()
  };

  filterTable = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let filters: any = this.state.filters;
    filters[event.target.name] =
      event.target.options[event.target.selectedIndex].text;
    this.setState({ ...this.state, filters: filters });

    let data = this.state.fullData;
    for (let filterName in filters) {
      if (filters[filterName] === null || filters[filterName] === "") {
        continue;
      }
      debugger;
      data = data.filter(function(equipmentItem) {
        return equipmentItem[filterName]["value"] === filters[filterName];
      });
    }
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
              <DynamicSelect
                name="employee"
                serviceName="employees"
                onChange={this.filterTable}
              />
            </td>
            <td>
              <span>Type</span>
              <DynamicSelect
                name="equipmentType"
                serviceName="equipmentTypes"
                onChange={this.filterTable}
              />
            </td>
            <td>
              <span>Manufactor</span>
              <DynamicSelect
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
