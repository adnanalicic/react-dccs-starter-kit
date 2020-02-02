/** 
  Copyright (c) 2020 DCCS Tuzla. All rights reserved.
  Implemented 2020 by DCCS Tuzla.

  @author: Adnan Alicic
*/

import MasterDataElement from "./MasterDataElement";

export default interface EquipmentType {
  id: string;
  employeeId: number;
  employee?: MasterDataElement;
  equipmentTypeId: number;
  equipmentType?: MasterDataElement;
  manufactorId: number;
  manufactor?: MasterDataElement;
  model: string;
  serialNumber: string;
  invoiceDate: string;
  guarantee: string;
}
