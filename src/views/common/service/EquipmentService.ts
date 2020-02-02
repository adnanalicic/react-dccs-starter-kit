import { DynamicSelectDataItem } from "../types/DynamicSelectDataItem";
import { EquipmentType } from "../types/EquipmentType";

/**
 * Service class for interacting with equipment data REST API.
 */
class EquipmentService {
  EQUIPMENT_SERVICE = "http://localhost:3001/equipment";
  MANUFACTORS_SERVICE = "http://localhost:3001/manufactor";
  EMPLOYEES_SERVICE = "http://localhost:3001/employee";
  EQUIPMENTTYPE_SERVICE = "http://localhost:3001/equipmentType";

  /**
   * Retrieves equipment item by it's identifier.
   * @param {String} id this is the identifier of an equipment item
   * @return {[Promise]} equipment item
   */
  fetchEquipmentById(id: string) {
    return fetch(this.EQUIPMENT_SERVICE + "/" + id).then(data => data.json());
  }

  /**
   * Retrieves all equipment items.
   * @return {[Promise]} equipment items
   */
  fetchEquipment() {
    return Promise.all([
      fetch(this.EQUIPMENT_SERVICE).then(data => data.json()),
      fetch(this.MANUFACTORS_SERVICE).then(data => data.json()),
      fetch(this.EMPLOYEES_SERVICE).then(data => data.json()),
      fetch(this.EQUIPMENTTYPE_SERVICE).then(data => data.json())
    ]).then(result => {
      let equipment = result[0];
      let manufactors = new Map(
        result[1].map((i: DynamicSelectDataItem) => [i.id.toString(), i.value])
      );
      let employees = new Map<string, string>(
        result[2].map((i: DynamicSelectDataItem) => [i.id.toString(), i.value])
      );
      let equipmentType = new Map(
        result[3].map((i: DynamicSelectDataItem) => [i.id.toString(), i.value])
      );

      equipment.map((el: EquipmentType) => {
        el.employee = employees.get(el.employee) as string;
        el.manufactor = manufactors.get(el.manufactor) as string;
        el.equipmentType = equipmentType.get(el.equipmentType) as string;
        return el;
      });
      return equipment;
    });
  }

  /**
   * Saves or updates an equipment items.
   * @param {[equipment]} given equipment
   * @return {[Promise]}
   */
  saveEquipmentItem(equipment: EquipmentType) {
    return fetch(this.EQUIPMENT_SERVICE + "/" + (equipment.id || ""), {
      method: equipment.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(equipment)
    });
  }

  /**
   * Deletes an equipment items.
   * @param {[equipment]} given equipment
   * @return {[Promise]}
   */
  deleteEquipmentItem(equipment: EquipmentType) {
    return fetch(this.EQUIPMENT_SERVICE + "/" + equipment.id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(equipment)
    });
  }
}

/*
  FIXME: Should we transform it into following according to our discussion or? :
  class EquipmentServiceType {}
  const equipmentService = new EquipmentServiceType();
  export default equipmentService;

 */

export default new EquipmentService();
