import React from "react";
import equipmentService from "../common/service/EquipmentService";
import EquipmentTable from "./equipmenttable/EquipmentTable";

import "./overviewpage.css";

// FIXME: some file names are starting with lower and other with upper case...

// FIXME: Should we name it nicer? maybe InventoryOverviewComponent and InventoryFormComponent?..
//  As you see both of them are inventory so should we put them into same package ?
//  Does it make sense at all to have `manage` menu item since it's only `create` of inventory...hmmm

/**
 * Overview of equipment data.
 */
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
    // FIXME: You don't need to use `...this.sate` thingy, this is done automatically inside `setState` method...
    this.setState({ ...this.state, equipment: data });
  };

  // FIXME: There is no need to make this action here...since #{@link EquipmentTable} is strict tot he equipment itself...
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
