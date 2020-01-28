class MasterDataService {
  SERVICE_BASE = "http://localhost:3001/";
  EQUIPMENT_SERVICE = "http://localhost:3001/equipment";
  MANUFACTORS_SERVICE = "http://localhost:3001/manufactor";
  EMPLOYEES_SERVICE = "http://localhost:3001/employee";
  EQUIPMENTTYPE_SERVICE = "http://localhost:3001/equipmentType";

  fetchData(dataType, callback) {
    fetch(this.SERVICE_BASE + dataType, callback)
      .then(data => data.json())
      .then(data => callback(data));
  }
}

export default new MasterDataService();
