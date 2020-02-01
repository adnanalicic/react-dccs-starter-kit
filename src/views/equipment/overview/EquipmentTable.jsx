import React from "react";
import DynamicSelect from "../../common/select/DynamicSelect";
import Router from "../../app/Router";

export default class EquipmentTable extends React.Component {
  state = {
    equipment: [],
    fullData: [],
    filters: {}
  };

  editEquipmentAction = id => {
    this.props.history.push(Router.MANAGE_PAGE + id);
  };

  filterTable = event => {
    let filters = this.state.filters;
    filters[event.target.name] =
      event.target.options[event.target.selectedIndex].text;
    this.setState({ ...this.state, filters: filters });

    let data = this.state.fullData;
    for (let filterName in filters) {
      if (filters[filterName] === null || filters[filterName] === "") {
        continue;
      }
      data = data.filter(function(equipmentItem) {
        return equipmentItem[filterName] === filters[filterName];
      });
    }
    this.setState({ ...this.state, equipment: data });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.fullData) {
      return { equipment: nextProps.data, fullData: nextProps.data };
    }

    return nextProps;
  }

  buildTableRow(item) {
    return (
      <tr key={item.id}>
        <td>
          <button
            data-equipmentid={item.id}
            onClick={event =>
              this.props.editAction(event.target.dataset.equipmentid)
            }
          >
            edit
          </button>
        </td>
        <td>{item.employee}</td>
        <td>{item.equipmentType}</td>
        <td>{item.manufactor}</td>
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
              <DynamicSelect name="employee" onChange={this.filterTable} />
            </td>
            <td>
              <span>Type</span>
              <DynamicSelect name="equipmentType" onChange={this.filterTable} />
            </td>
            <td>
              <span>Manufactor</span>
              <DynamicSelect name="manufactor" onChange={this.filterTable} />
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
