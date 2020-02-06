/**
  Copyright (c) 2020 DCCS Tuzla. All rights reserved.
  Implemented 2020 by DCCS Tuzla.

  @author: Adnan Alicic
*/

import EquipmentType from '../types/EquipmentType';

/**
 * Service class for interacting with equipment data REST API.
 */
class EquipmentService {
  EQUIPMENT_SERVICE = 'http://localhost:3001/equipments/';
  EQUIPMENT_QUERY =
    '?_expand=employee&_expand=equipmentType&_expand=manufactor';
  /**
   * Retrieves equipment item by it's identifier.
   * @param {String} id this is the identifier of an equipment item
   * @return {[Promise]} equipment item
   */
  fetchEquipmentById(id: string) {
    return fetch(
      this.EQUIPMENT_SERVICE + id + this.EQUIPMENT_QUERY
    ).then(data => data.json());
  }

  /**
   * Retrieves all equipment items.
   * @return {[Promise]} equipment items
   */
  fetchEquipment() {
    return fetch(this.EQUIPMENT_SERVICE + this.EQUIPMENT_QUERY).then(data =>
      data.json()
    );
  }

  /**
   * Saves or updates an equipment items.
   * @param {[equipment]} given equipment
   * @return {[Promise]}
   */
  saveEquipmentItem(equipment: EquipmentType) {
    return fetch(this.EQUIPMENT_SERVICE + (equipment.id || ''), {
      method: equipment.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(equipment)
    });
  }

  /**
   * Deletes an equipment items.
   * @param {[equipment]} given equipment
   * @return {[Promise]}
   */
  deleteEquipmentItem(equipment: EquipmentType) {
    return fetch(this.EQUIPMENT_SERVICE + equipment.id, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(equipment)
    });
  }
}

const equipmentService = new EquipmentService();
export default equipmentService;
