import React from "react";
import equipmentService from "../common/service/EquipmentService";
import EquipmentTable from "./EquipmentTable";
import "./overviewpage.css";

export default class OverviewPage extends React.Component {
  state = {
    equipment: []
  };

  constructor(props) {
    super(props);
    equipmentService
      .fetchEquipment()
      .then(result => this.updateStateAction(result));
  }

  updateStateAction = data => {
    this.setState({ ...this.state, equipment: data });
  };

  render() {
    return <EquipmentTable data={this.state.equipment} />;
  }
}
