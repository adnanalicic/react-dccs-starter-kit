/**
 * Copyright (c) 2020 DCCS Tuzla. All rights reserved.
 * Implemented 2020 by DCCS Tuzla.
 */

import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import {
  renderButton,
  renderInput,
  renderSelect,
  Row
} from "../../../common/componentUtils";
import Router from "../../../common/RouterPaths";
import equipmentService from "../../common/service/EquipmentService";
import EquipmentType from "../../common/types/EquipmentType";

import "./EquipmentFormComponent.css";

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
    equipment: Object.assign({})
  };

  handleChange = (
    name: keyof EquipmentType,
    value: EquipmentType[keyof EquipmentType]
  ) => {
    const { equipment: oldModel } = this.state;
    this.setState({ equipment: { ...oldModel, [name]: value } });
  };

  saveEquipmentItemAction = () => {
    if (this.isFormValid()) {
      equipmentService.saveEquipmentItem(this.state.equipment).then(() => {
        this.props.history.push(Router.EQUIPMENT);
        alert("data saved");
      });
    } else {
      alert("there are some mandatory fields not filled");
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
      alert("data deleted");
    });
  };

  render() {
    const { equipment } = this.state;
    return (
      <div className="formContainer">
        <Row>
          {renderButton("Save", this.saveEquipmentItemAction)}
          {equipment.id &&
            renderButton("Delete", this.deleteEquipmentItemAction)}
        </Row>
        <Row>
          {renderSelect(
            "Employee: *",
            equipment,
            "employeeId",
            "employee",
            this.handleChange
          )}
        </Row>
        <Row>
          {renderSelect(
            "Equipment type: *",
            equipment,
            "equipmentTypeId",
            "equipmentType",
            this.handleChange
          )}
        </Row>
        <Row>
          {renderSelect(
            "Manufactor: *",
            equipment,
            "manufactorId",
            "manufactor",
            this.handleChange
          )}
        </Row>
        <Row>
          {renderInput("Model: *", equipment, "model", this.handleChange)}
        </Row>
        <Row>
          {renderInput(
            "Serial number: *",
            equipment,
            "serialNumber",
            this.handleChange
          )}
        </Row>
        <Row>
          {renderInput(
            "Invoice date: *",
            equipment,
            "invoiceDate",
            this.handleChange
          )}
        </Row>
        <Row>
          {renderInput(
            "Warranty: *",
            equipment,
            "warrantyDate",
            this.handleChange
          )}
        </Row>
      </div>
    );
  }
}
