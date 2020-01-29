import React from "react";
import DynamicSelect from "../common/select/DynamicSelect";
import equipmentService from "../common/service/EquipmentService";
import "./ManagePage.css";

export default class ManageEquipmentPage extends React.Component {
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

  constructor(props) {
    super(props);
    let eqId = window.location.hash.substring(9);
    if (eqId) {
      equipmentService
        .fetchEquipmentById(eqId)
        .then(data => this.setState({ equipment: data }));
    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      equipment: {
        ...this.state.equipment,
        [event.target.name]: event.target.value
      }
    });
  };

  saveEquipmentItemAction = event => {
    equipmentService.saveEquipmentItem(this.state.equipment).then(() => {
      this.props.history.push("/overview");
      alert("data saved");
    });
  };

  deleteEquipmentItemAction = event => {
    equipmentService.deleteEquipmentItem(this.state.equipment).then(() => {
      this.props.history.push("/overview");
      alert("data deleted");
    });
  };

  render() {
    return (
      <div className="form-container">
        <table>
          <tbody>
            <tr>
              <td>
                <span>Employee:</span>
                <DynamicSelect
                  name="employee"
                  value={this.state.equipment.employee}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <span>Equipment type: *</span>
                <DynamicSelect
                  name="equipmentType"
                  value={this.state.equipment.equipmentType}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span>Manufactor: *</span>
                <DynamicSelect
                  name="manufactor"
                  value={this.state.equipment.manufactor}
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
            <tr>
              <td>
                <input
                  type="button"
                  value="Save"
                  onClick={this.saveEquipmentItemAction}
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  onClick={this.deleteEquipmentItemAction}
                  className="button-grey"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
