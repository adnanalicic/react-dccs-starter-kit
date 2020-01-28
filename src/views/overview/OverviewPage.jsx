import React from "react";
import equipmentService from "../common/service/EquipmentService";
import EquipmentContainer from "./EquipmentContainer";
import "./overviewpage.css";
import DynamicSelect from "../common/select/DynamicSelect";
export default class OverviewPage extends React.Component {
  constructor(props) {
    super(props);
    equipmentService
      .fetchEquipment()
      .then(result => this.updateStateAction(result));
    this.state = {
      equipment: [],
      filter: {
        employee: "",
        equipmentType: ""
      }
    };

    //TODO: possible discussion point
    this.filterTable = this.filterTable.bind(this);
  }

  //TODO: possible discussion point
  updateStateAction = data => {
    this.setState({ ...this.state, equipment: data });
  };

  filterTable(event) {
    let filter = undefined;
    if (event.target.value !== "DEFAULT") {
      filter = {
        key: event.target.name,
        value: event.target.value
      };
    }
    equipmentService.fetchEquipment(this.updateStateAction, filter);
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
