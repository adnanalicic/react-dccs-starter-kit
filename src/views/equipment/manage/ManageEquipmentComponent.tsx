/** 
  Copyright (c) 2020 DCCS Tuzla. All rights reserved.
  Implemented 2020 by DCCS Tuzla.

  @author: Adnan Alicic
*/

import React from "react";
import DynamicSelectComponent from "../../common/select/DynamicSelectComponent";
import equipmentService from "../../common/service/EquipmentService";
import Router from "../../../common/Router";
import { History, LocationState } from "history";
import EquipmentType from "../../common/types/EquipmentType";

import "./ManageEquipmentComponent.css";

interface ManageEquipmentComponentProps {
  history: History<LocationState>;
}
interface ManageEquipmentComponentState {
  equipment: EquipmentType;
}

/**
 * Manage equipment item page.
 */
export default class ManageEquipmentComponent extends React.Component<
  ManageEquipmentComponentProps,
  ManageEquipmentComponentState
> {
  state: ManageEquipmentComponentState = {
    equipment: {
      id: "",
      employeeId: 0,
      equipmentTypeId: 0,
      manufactorId: 0,
      serialNumber: "",
      model: "",
      invoiceDate: "",
      guarantee: ""
    }
  };

  constructor(props: ManageEquipmentComponentProps) {
    super(props);
    let eqId = window.location.hash.substring(12);
    if (eqId && eqId !== "new") {
      equipmentService.fetchEquipmentById(eqId).then((data: EquipmentType) => {
        debugger;
        this.setState({ equipment: data });
      });
    }
  }

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.preventDefault();
    this.setState({
      equipment: {
        ...this.state.equipment,
        [event.target.name]: event.target.value
      }
    });
    console.log(this.state);
  };

  saveEquipmentItemAction = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
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

  deleteEquipmentItemAction = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    equipmentService.deleteEquipmentItem(this.state.equipment).then(() => {
      this.props.history.push(Router.EQUIPMENT);
      alert("data deleted");
    });
  };

  render() {
    let deleteButton;

    if (this.state.equipment.id) {
      deleteButton = (
        <input
          type="button"
          value="Delete"
          onClick={this.deleteEquipmentItemAction}
          className="button"
        />
      );
    }

    return (
      <div className="formContainer">
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="button"
                  value="Save"
                  onClick={this.saveEquipmentItemAction}
                  className="button"
                />
                {deleteButton}
              </td>
            </tr>
            <tr>
              <td>
                <span>Employee:</span>
                <DynamicSelectComponent
                  name="employeeId"
                  serviceName="employees"
                  value={this.state.equipment.employeeId}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <span>Equipment type: *</span>
                <DynamicSelectComponent
                  name="equipmentTypeId"
                  serviceName="equipmentTypes"
                  value={this.state.equipment.equipmentTypeId}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span>Manufactor: *</span>
                <DynamicSelectComponent
                  name="manufactorId"
                  serviceName="manufactors"
                  value={this.state.equipment.manufactorId}
                  onChange={this.handleChange}
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div>Model: *</div>
                <input
                  type="text"
                  name="model"
                  value={this.state.equipment.model}
                  onChange={this.handleChange}
                  className="textfield"
                />
              </td>
              <td>
                <div>Serial number: *</div>
                <input
                  type="text"
                  name="serialNumber"
                  value={this.state.equipment.serialNumber}
                  onChange={this.handleChange}
                  className="textfield"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>Invoice date: *</div>
                <input
                  type="text"
                  name="invoiceDate"
                  value={this.state.equipment.invoiceDate}
                  onChange={this.handleChange}
                  className="textfield"
                />
              </td>
              <td>
                <div>Warranty: *</div>
                <input
                  type="text"
                  name="guarantee"
                  value={this.state.equipment.guarantee}
                  onChange={this.handleChange}
                  className="textfield"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
