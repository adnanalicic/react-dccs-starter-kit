class EquipmentService {
  EQUIPMENT_SERVICE = "http://localhost:3001/equipment";
  MANUFACTORS_SERVICE = "http://localhost:3001/manufactor";
  EMPLOYEES_SERVICE = "http://localhost:3001/employee";
  EQUIPMENTTYPE_SERVICE = "http://localhost:3001/equipmentType";

  fetchEquipment(callback, filter) {
    return Promise.all([
      fetch(this.EQUIPMENT_SERVICE).then(data => data.json()),
      fetch(this.MANUFACTORS_SERVICE).then(data => data.json()),
      fetch(this.EMPLOYEES_SERVICE).then(data => data.json()),
      fetch(this.EQUIPMENTTYPE_SERVICE).then(data => data.json())
    ]).then(result => {
      let equipment = result[0];
      if (filter) {
        console.log("filter");
        equipment = equipment.filter(el => {
          return el[filter["key"]] === filter["value"];
        });
      }

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
      //TODO: check this
      return equipment;
    });
  }
}

export default new EquipmentService();
