import React from "react";

export default class EquipmentTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.employee}</td>
        <td>{this.props.item.equipmentType}</td>
        <td>{this.props.item.manufactor}</td>
        <td>{this.props.item.model}</td>
        <td>{this.props.item.serialNumber}</td>
        <td>{this.props.item.invoiceDate}</td>
        <td>{this.props.item.guarantee}</td>
      </tr>
    );
  }
}
