import React from "react";
import EquipmentTableRow from "./EquipmentTableRow";
import DynamicSelect from "../../common/select/DynamicSelect";

export default class EquipmentTable extends React.Component {
  state = {
    equipment: [],
    fullData: [],
    filters: {}
  };

  // FIXME: This looks nasty and will have to be reworked, at least in TS time...
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
      // FIXME: Big complexity ...O(n^m)...but it should be O(n)
      data = data.filter(function(equipmentItem) {
        return equipmentItem[filterName] === filters[filterName];
      });
    }
    this.setState({ ...this.state, equipment: data });
  };

  // FIXME: This method is deprecated...let's discuss how to solve it in different way...
  componentWillReceiveProps(props) {
    this.setState({
      equipment: props.data,
      fullData: props.data
    });
  }

  render() {
    return (
      <table className="equipmentTable">
        <thead>
          <tr>
            <td>
              {/* FIXME: */}
              <span></span>
            </td>
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
          {this.state.equipment.map(item => (
            <EquipmentTableRow
              editAction={this.props.editAction}
              key={item.id}
              item={item}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
