import React from "react";
import equipmentService from "../../common/service/EquipmentService";
import EquipmentTable from "./EquipmentTable";

import "./overviewpage.css";
import Router from "../../app/Router";

/**
 * Overview of equipment data.
 */
export default class EquipmentOverviewComponent extends React.Component {
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
    this.setState({ equipment: data });
  };

  // FIXME: There is no need to make this action here...since #{@link EquipmentTable} is strict tot he equipment itself...
  editEquipmentAction = id => {
    this.props.history.push(Router.EQUIPMENT + id);
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
