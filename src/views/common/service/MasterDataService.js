/**
 * Service class for interacting with master data REST API.
 */
class MasterDataService {
  SERVICE_BASE = "http://localhost:3001/";
  EQUIPMENT_SERVICE = "http://localhost:3001/equipment";
  MANUFACTORS_SERVICE = "http://localhost:3001/manufactor";
  EMPLOYEES_SERVICE = "http://localhost:3001/employee";
  EQUIPMENTTYPE_SERVICE = "http://localhost:3001/equipmentType";

  /**
   * Retrieves master data for given data type
   * @param {String} dataType this is the identifier of master data type
   * @return {[Promise]} result wrapped inside promise
   */
  fetchData(dataType) {
    return fetch(this.SERVICE_BASE + dataType).then(data => data.json());
  }
}

export default new MasterDataService();
