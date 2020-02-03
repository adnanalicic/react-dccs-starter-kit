/**
 Copyright (c) 2020 DCCS Tuzla. All rights reserved.
 Implemented 2020 by DCCS Tuzla.

 @author: Adnan Alicic
 */

import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import equipmentService from '../../common/service/EquipmentService';
import EquipmentType from '../../common/types/EquipmentType';
import EquipmentTable from './EquipmentTable';

import './EquipmentOverviewComponent.css';

interface EquipmentOverviewComponentProps extends RouteComponentProps {
}

interface EquipmentOverviewComponentState {
  equipment: EquipmentType[];
}

/**
 * Overview of equipment data.
 */
export default class EquipmentOverviewComponent extends Component<EquipmentOverviewComponentProps, EquipmentOverviewComponentState> {
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
    this.setState({equipment: data});
  };

  render() {
    return <EquipmentTable data={this.state.equipment}/>;
  }
}
