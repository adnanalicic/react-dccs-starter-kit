/** 
  Copyright (c) 2020 DCCS Tuzla. All rights reserved.
  Implemented 2020 by DCCS Tuzla.

  @author: Adnan Alicic
*/

/**
 * Service class for interacting with master data REST API.
 */
class MasterDataService {
  SERVICE_BASE = "http://localhost:8080/rest/";
  EQUIPMENT_SERVICE = this.SERVICE_BASE + "equipment";
  MANUFACTORS_SERVICE = this.SERVICE_BASE + "manufactor";
  EMPLOYEES_SERVICE = this.SERVICE_BASE + "employee";
  EQUIPMENTTYPE_SERVICE = this.SERVICE_BASE + "equipmentType";

  /**
   * Retrieves master data for given data type
   * @param {String} dataType this is the identifier of master data type
   * @return {[Promise]} result wrapped inside promise
   */
  fetchData(dataType: string) {
    return fetch(this.SERVICE_BASE + dataType).then(data => data.json());
  }
}

const masterDataService = new MasterDataService();
export default masterDataService;
