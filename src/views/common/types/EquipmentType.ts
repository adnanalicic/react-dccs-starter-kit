export interface MasterDataElement {
  id: number;
  value: string;
}

export interface EquipmentType {
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
