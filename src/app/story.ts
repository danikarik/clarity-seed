export class Story {
  id: number;
  // данные пациента
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;  
  age: number;
  gender: number;
  nationality: string;
  regDate: string;
  // Постоянное место жительства
  isResident: boolean;
  inCity: boolean;
  region: string;
  district: string;
  street: string;
  homePhone: string;
  // Документ
  docType: string;
  docNumber: string;
  docIIN: string;
  docSeries: string;
  // Полис
  insuranceNumber: string;
  insuranceCompany: string;
  // Место работы
  workPlace: string;
  workPosition: string;
  workNumber: string;
  lastVisit: string;
  // Доп. поля
  socialStatus: string;
  // 
  receiptDate: string;
  dischargeDate: string;
  department: string;
  ward: string;
  cotDays: number;
  bloodGroup: string;
  rH: boolean;
  name: string;
  diagnosis: string;
  emergency: boolean;
  plan: boolean;
  firstTime: boolean;
  initialTreatment: string;
  doctor: string;

  constructor() {}
}
