import React from "react";
import EquipmentContainer from "./EquipmentTableRow";
import DynamicSelect from "../common/select/DynamicSelect";

export default class EquipmentTable extends React.Component {
  state = {
    equipment: [],
    fullData: [],
    filters: {}
  };

  filterTable = event => {
    let filters = this.state.filters;
    filters[event.target.name] = event.target.value;
    this.setState({ ...this.state, filters: filters });

    let data = this.state.fullData;
    for (let filterName in filters) {
      if (filters[filterName] === "DEFAULT") {
        continue;
      }
      data = data.filter(function(equipmentItem) {
        debugger;
        return equipmentItem[filterName] === filters[filterName];
      });
    }
    this.setState({ ...this.state, equipment: data });
  };

  componentWillReceiveProps(props) {
    this.setState({
      equipment: props.data,
      fullData: props.data
    });
  }

  render() {
    return (
      <div>
        <div className="page-container">
          <table className="overview-table">
            <thead>
              <tr>
                <td>
                  <span>Name</span>
                  <DynamicSelect name="employee" onChange={this.filterTable} />
                </td>
                <td>
                  <span>Type</span>
                  <DynamicSelect
                    name="equipmentType"
                    onChange={this.filterTable}
                  />
                </td>
                <td>Manufactor</td>
                <td>Model</td>
                <td>Serial number</td>
                <td>Invoice date</td>
                <td>Warranty</td>
              </tr>
            </thead>
            <tbody>
              {this.state.equipment.map(item => (
                <EquipmentContainer key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
