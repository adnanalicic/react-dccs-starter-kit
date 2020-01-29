import React from "react";
import equipmentService from "../common/service/EquipmentService";
import EquipmentTable from "./equipmenttable/EquipmentTable";
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

  editEquipmentAction = id => {
    this.props.history.push("/manage/" + id);
  };

  render() {
    return (
      <EquipmentTable
        editAction={this.editEquipmentAction}
        data={this.state.equipment}
      />
    );
  }
}
