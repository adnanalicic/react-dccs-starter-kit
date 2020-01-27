class EquipmentService {
  EQUIPMENT_SERVICE = "http://localhost:3001/equipment";
  MANUFACTORS_SERVICE = "http://localhost:3001/manufactors";
  EMPLOYEES_SERVICE = "http://localhost:3001/employees";
  EQUIPMENTTYPE_SERVICE = "http://localhost:3001/equipmentType";

  fetchEquipment(callback) {
    return Promise.all([
      fetch(this.EQUIPMENT_SERVICE).then(data => data.json()),
      fetch(this.MANUFACTORS_SERVICE).then(data => data.json()),
      fetch(this.EMPLOYEES_SERVICE).then(data => data.json()),
      fetch(this.EQUIPMENTTYPE_SERVICE).then(data => data.json())
    ]).then(result => {
      let equipment = result[0];
      let manufactors = new Map(result[1].map(i => [i.id.toString(), i.value]));
      let employees = new Map(result[2].map(i => [i.id.toString(), i.name]));
      let equipmentType = new Map(
        result[3].map(i => [i.id.toString(), i.value])
      );

      equipment.map(el => {
        el.employee = employees.get(el["employee"]);
        el.manufactor = manufactors.get(el["manufactor"]);
        el.equipmentType = equipmentType.get(el["equipmentType"]);
        return el;
      });

      callback(equipment);
    });
  }
}

export default EquipmentService;
