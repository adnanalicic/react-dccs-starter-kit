import { EquipmentType } from "../types/EquipmentType";

/**
 * Service class for interacting with equipment data REST API.
 */
class EquipmentService {
  EQUIPMENT_SERVICE = "http://localhost:3001/equipments";
  MANUFACTORS_SERVICE = "http://localhost:3001/manufactors";
  EMPLOYEES_SERVICE = "http://localhost:3001/employees";
  EQUIPMENTTYPE_SERVICE = "http://localhost:3001/equipmentTypes";

  /**
   * Retrieves equipment item by it's identifier.
   * @param {String} id this is the identifier of an equipment item
   * @return {[Promise]} equipment item
   */
  fetchEquipmentById(id: string) {
    return fetch(
      "http://localhost:3001/equipments/" +
        id +
        "?_expand=employee&_expand=equipmentType&_expand=manufactor"
    ).then(data => data.json());
  }

  /**
   * Retrieves all equipment items.
   * @return {[Promise]} equipment items
   */
  fetchEquipment() {
    return fetch(
      "http://localhost:3001/equipments/?_expand=employee&_expand=equipmentType&_expand=manufactor"
    ).then(data => data.json());
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
