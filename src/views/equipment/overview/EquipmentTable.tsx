/**
 Copyright (c) 2020 DCCS Tuzla. All rights reserved.
 Implemented 2020 by DCCS Tuzla.

 @author: Adnan Alicic
 */

import React, { Component, ReactNode } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { renderSelect } from '../../../common/componentUtils';
import Router from '../../../common/RouterPaths';
import EquipmentType from '../../common/types/EquipmentType';

import * as css from './EquipmentTable.scss';

interface EquipmentTableProps extends RouteComponentProps {
  data: EquipmentType[];
}

type FilterCriteriaType = { [key in keyof EquipmentType]: string };

interface EquipmentTableState {
  filterCriteria: Partial<FilterCriteriaType>;
}

class EquipmentTable extends Component<EquipmentTableProps, EquipmentTableState> {
  state = {
    filterCriteria: {}
  };

  editAction = (id: string) => {
    this.props.history.push(Router.EQUIPMENT + id);
  };

  applyFilter = (name: string, value: string) => {
    const { filterCriteria: oldFilterCriteria } = this.state;
    this.setState({ filterCriteria: { ...oldFilterCriteria, [name]: value } });
  };

  private _applyFilterCriteria(equipment: EquipmentType): boolean {
    const filterCriteria: Partial<FilterCriteriaType> = this.state.filterCriteria;
    const { employeeId, equipmentTypeId, manufactorId } = filterCriteria;
    const { employee, equipmentType, manufactor } = equipment;

    let valid = this._equals(employee && employee.id, employeeId);
    valid = valid && this._equals(equipmentType && equipmentType.id, equipmentTypeId);
    valid = valid && this._equals(manufactor && manufactor.id, manufactorId);
    return valid;
  }

  private _equals(val1?: string | number, val2?: string | number) {
    return !val2 ? true : String(val1) === String(val2);
  }

  render() {
    const filterCriteria: Partial<FilterCriteriaType> = this.state.filterCriteria;
    return (
      <table className={css.equipmentTable}>
        <thead>
          <tr>
            <td />
            <td>{renderSelect('Name', filterCriteria, 'employeeId', 'employees', this.applyFilter)}</td>
            <td>{renderSelect('Type', filterCriteria, 'equipmentTypeId', 'equipmentTypes', this.applyFilter)}</td>
            <td>{renderSelect('Manufactor', filterCriteria, 'manufactorId', 'manufactors', this.applyFilter)}</td>
            <td>Model</td>
            <td>Serial number</td>
            <td>Invoice date</td>
            <td>Warranty</td>
          </tr>
        </thead>
        <tbody>{this.renderBody()}</tbody>
      </table>
    );
  }

  private renderBody() {
    const { data } = this.props;
    const nodes: ReactNode[] = [];
    data.forEach((equipment) => {
      if (this._applyFilterCriteria(equipment)) {
        nodes.push(this.renderRow(equipment));
      }
    });
    return nodes;
  }

  renderRow(item: EquipmentType) {
    return (
      <tr key={item.id}>
        <td>
          <button onClick={() => this.editAction(item.id)}>edit</button>
        </td>
        <td>{item.employee ? item.employee.value : ''}</td>
        <td>{item.equipmentType ? item.equipmentType.value : ''}</td>
        <td>{item.manufactor ? item.manufactor.value : ''}</td>
        <td>{item.model}</td>
        <td>{item.serialNumber}</td>
        <td>{item.invoiceDate}</td>
        <td>{item.guarantee}</td>
      </tr>
    );
  }
}

export default withRouter(EquipmentTable);
