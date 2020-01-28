import React from "react";
import EquipmentContainer from "./EquipmentContainer";
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
          <div>
            <div className="overview-table-header">
              <div className="overview-table-cell">
                Name
                <DynamicSelect name="employee" onChange={this.filterTable} />
              </div>
              <div className="overview-table-cell">
                Type
                <DynamicSelect
                  name="equipmentType"
                  onChange={this.filterTable}
                />
              </div>
              <div className="overview-table-cell">Manufactor</div>
              <div className="overview-table-cell">Model</div>
              <div className="overview-table-cell">Serial number</div>
              <div className="overview-table-cell">Invoice date</div>
              <div className="overview-table-cell">Warranty</div>
            </div>
            {this.state.equipment.map(item => (
              <EquipmentContainer key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
