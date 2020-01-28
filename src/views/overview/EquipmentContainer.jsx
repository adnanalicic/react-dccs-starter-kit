import React from "react";

export default class EquipmentRow extends React.Component {
  render() {
    return (
      <div className="overview-table-row">
        <div className="overview-table-cell">{this.props.item.employee}</div>
        <div className="overview-table-cell">
          {this.props.item.equipmentType}
        </div>
        <div className="overview-table-cell">{this.props.item.manufactor}</div>
        <div className="overview-table-cell">{this.props.item.model}</div>
        <div className="overview-table-cell">
          {this.props.item.serialNumber}
        </div>
        <div className="overview-table-cell">{this.props.item.invoiceDate}</div>
        <div className="overview-table-cell">{this.props.item.guarantee}</div>
      </div>
    );
  }
}
