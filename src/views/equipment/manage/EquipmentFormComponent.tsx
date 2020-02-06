/**
 * Copyright (c) 2020 DCCS Tuzla. All rights reserved.
 * Implemented 2020 by DCCS Tuzla.
 */

import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { renderButton, renderInput, renderSelect, Row } from '../../../common/componentUtils';
import Router from '../../../common/RouterPaths';
import equipmentService from '../../common/service/EquipmentService';
import EquipmentType from '../../common/types/EquipmentType';

import * as css from './EquipmentFormComponent.scss';

interface ManageEquipmentComponentState {
  equipment: EquipmentType;
}

/**
 * Manage equipment item page.
 */
export default class EquipmentFormComponent<T> extends Component<
  RouteComponentProps<T>,
  ManageEquipmentComponentState
> {
  state: ManageEquipmentComponentState = {
    equipment: {}
  };

  handleChange = (name: keyof EquipmentType, value: EquipmentType[keyof EquipmentType]) => {
    const { equipment: oldModel } = this.state;
    this.setState({ equipment: { ...oldModel, [name]: value } });
  };

  saveEquipmentItemAction = () => {
    if (this.isFormValid()) {
      equipmentService.saveEquipmentItem(this.state.equipment).then(() => {
        this.props.history.push(Router.EQUIPMENT);
        alert('data saved');
      });
    } else {
      alert('there are some mandatory fields not filled');
    }
  };

  isFormValid = () => {
    if (
      this.state.equipment.equipmentTypeId &&
      this.state.equipment.manufactorId &&
      this.state.equipment.serialNumber &&
      this.state.equipment.invoiceDate &&
      this.state.equipment.model
    ) {
      return true;
    }
    return false;
  };

  deleteEquipmentItemAction = () => {
    equipmentService.deleteEquipmentItem(this.state.equipment).then(() => {
      this.props.history.push(Router.EQUIPMENT);
      alert('data deleted');
    });
  };

  render() {
    const { equipment } = this.state;
    return (
      <div className={css.formContainer}>
        <Row className={css.formRow}>
          {renderButton('Save', this.saveEquipmentItemAction)}
          {equipment.id && renderButton('Delete', this.deleteEquipmentItemAction)}
        </Row>
        <Row className={css.formRow}>
          {renderSelect('Employee: *', equipment, 'employeeId', 'employees', this.handleChange)}
        </Row>
        <Row className={css.formRow}>
          {renderSelect('Equipment type: *', equipment, 'equipmentTypeId', 'equipmentTypes', this.handleChange)}
        </Row>
        <Row className={css.formRow}>
          {renderSelect('Manufactor: *', equipment, 'manufactorId', 'manufactors', this.handleChange)}
        </Row>
        <Row className={css.formRow}>{renderInput('Model: *', equipment, 'model', this.handleChange)}</Row>
        <Row className={css.formRow}>
          {renderInput('Serial number: *', equipment, 'serialNumber', this.handleChange)}
        </Row>
        <Row className={css.formRow}>{renderInput('Invoice date: *', equipment, 'invoiceDate', this.handleChange)}</Row>
        <Row className={css.formRow}>{renderInput('Warranty: *', equipment, 'guarantee', this.handleChange)}</Row>
      </div>
    );
  }
}
