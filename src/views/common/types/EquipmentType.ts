/** 
  Copyright (c) 2020 DCCS Tuzla. All rights reserved.
  Implemented 2020 by DCCS Tuzla.

  @author: Adnan Alicic
*/

import MasterDataElementType from "./MasterDataElementType";

export default interface EquipmentType {
  id: string;
  employeeId: number;
  employee?: MasterDataElementType;
  equipmentTypeId: number;
  equipmentType?: MasterDataElementType;
  manufactorId: number;
  manufactor?: MasterDataElementType;
  model: string;
  serialNumber: string;
  invoiceDate: string;
  guarantee: string;
}
