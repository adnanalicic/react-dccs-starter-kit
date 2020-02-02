/** 
  Copyright (c) 2020 DCCS Tuzla. All rights reserved.
  Implemented 2020 by DCCS Tuzla.

  @author: Adnan Alicic
*/

import React from "react";
import equipmentService from "../../common/service/EquipmentService";
import EquipmentTable from "./EquipmentTable";

import "./overviewpage.css";
import Router from "../../../common/Router";
import { History, LocationState } from "history";
import EquipmentType from "../../common/types/EquipmentType";

interface EquipmentOverviewComponentProps {
  history: History<LocationState>;
}

/**
 * Overview of equipment data.
 */
export default class EquipmentOverviewComponent extends React.Component<
  EquipmentOverviewComponentProps
> {
  state = {
    equipment: []
  };

  constructor(props: EquipmentOverviewComponentProps) {
    super(props);
    equipmentService
      .fetchEquipment()
      .then(result => this.updateStateAction(result));
  }

  updateStateAction = (data: EquipmentType[]) => {
    this.setState({ equipment: data });
  };

  // FIXME: There is no need to make this action here...since #{@link EquipmentTable} is strict tot he equipment itself...
  editEquipmentAction = (id: string) => {
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
