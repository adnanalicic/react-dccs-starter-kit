class EquipmentService {
  EQUIPMENT_SERVICE = "http://localhost:3001/equipment";
  MANUFACTORS_SERVICE = "http://localhost:3001/manufactor";
  EMPLOYEES_SERVICE = "http://localhost:3001/employee";
  EQUIPMENTTYPE_SERVICE = "http://localhost:3001/equipmentType";

  fetchEquipmentById(id) {
    return fetch(this.EQUIPMENT_SERVICE + "/" + id).then(data => data.json());
  }
  fetchEquipment() {
    return Promise.all([
      fetch(this.EQUIPMENT_SERVICE).then(data => data.json()),
      fetch(this.MANUFACTORS_SERVICE).then(data => data.json()),
      fetch(this.EMPLOYEES_SERVICE).then(data => data.json()),
      fetch(this.EQUIPMENTTYPE_SERVICE).then(data => data.json())
    ]).then(result => {
      let equipment = result[0];
      let manufactors = new Map(result[1].map(i => [i.id.toString(), i.value]));
      let employees = new Map(result[2].map(i => [i.id.toString(), i.value]));
      let equipmentType = new Map(
        result[3].map(i => [i.id.toString(), i.value])
      );

      equipment.map(el => {
        el.employee = employees.get(el["employee"]);
        el.manufactor = manufactors.get(el["manufactor"]);
        el.equipmentType = equipmentType.get(el["equipmentType"]);
        return el;
      });
      return equipment;
    });
  }

  saveEquipmentItem(equipment) {
    return fetch(this.EQUIPMENT_SERVICE + "/" + (equipment.id || ""), {
      method: equipment.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(equipment)
    });
  }
  deleteEquipmentItem(equipment) {
    return fetch(this.EQUIPMENT_SERVICE + "/" + equipment.id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(equipment)
    });
  }
}

export default new EquipmentService();
