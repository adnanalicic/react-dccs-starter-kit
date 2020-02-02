import React from "react";
import DynamicSelect from "../../common/select/DynamicSelect";
import equipmentService from "../../common/service/EquipmentService";
import Router from "../../../common/Router";
import { History, LocationState } from "history";

import "./ManageEquipmentComponent.css";

interface ManageEquipmentComponentProps {
  history: History<LocationState>;
}

/**
 * Manage equipment item page.
 */
export default class ManageEquipmentComponent extends React.Component<
  ManageEquipmentComponentProps
> {
  state = {
    equipment: {
      id: "",
      employee: "",
      equipmentType: "",
      manufactor: "",
      serialNumber: "",
      model: "",
      invoiceDate: "",
      guarantee: ""
    }
  };

  constructor(props: ManageEquipmentComponentProps) {
    super(props);
    let eqId = window.location.hash.substring(12);
    if (eqId) {
      equipmentService
        .fetchEquipmentById(eqId)
        .then(data => this.setState({ equipment: data }));
    }
  }

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    this.setState({
      equipment: {
        ...this.state.equipment,
        [event.target.name]: event.target.value
      }
    });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({
      equipment: {
        ...this.state.equipment,
        [event.target.name]: event.target.value
      }
    });
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
      this.state.equipment.equipmentType &&
      this.state.equipment.manufactor &&
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
                <DynamicSelect
                  name="employee"
                  value={this.state.equipment.employee}
                  onChange={this.handleSelectChange}
                />
              </td>
              <td>
                <span>Equipment type: *</span>
                <DynamicSelect
                  name="equipmentType"
                  value={this.state.equipment.equipmentType}
                  onChange={this.handleSelectChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span>Manufactor: *</span>
                <DynamicSelect
                  name="manufactor"
                  value={this.state.equipment.manufactor}
                  onChange={this.handleSelectChange}
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
