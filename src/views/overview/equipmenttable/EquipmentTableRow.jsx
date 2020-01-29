import React from "react";

// FIXME: This doesn't make too much sense if it's component specific....looks weird from developer perspective...

export default class EquipmentTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <button
            data-equipmentid={this.props.item.id}
            onClick={event =>
              this.props.editAction(event.target.dataset.equipmentid)
            }
          >
            edit
          </button>
        </td>
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
