import React from "react";
import EquipmentService from "../../service/EquipmentService";
import EquipmentContainer from "./EquipmentContainer";
import "./overviewpage.css";
export default class OverviewPage extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      equipment: []
    };
    this.equipmentService = new EquipmentService();
    this.updateStoreAction = this.updateStoreAction.bind(this);
  }

  componentDidMount() {
    this.equipmentService.fetchEquipment(this.updateStoreAction);
  }

  updateStoreAction(data) {
    this.setState({ equipment: data });
  }

  render() {
    return (
      <div>
        <div className="page-container">
          <div>
            <div className="overview-table-header">
              <div className="overview-table-cell">Name</div>
              <div className="overview-table-cell">Type</div>
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
