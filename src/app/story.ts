export class Story {
    id: number;
    // Данные пациента
    firstName: string;
    lastName: string;
    middleName: string;
    birthDate: string;
    age: number;
    gender: number;
    nationality: string;
    regDate: string;
    name: string;
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
    // Примный покой
    receiptDate: string;
    receiptTime: string;
    height: number;
    weight: number;
    itch: boolean;
    pediculosis: boolean;
    nurse: string;
    // Поступление
    addressedFrom: string;
    addressedWhom: string;
    directionNumber: string;
    directionDate: string;
    receiptDateDep: string;
    receiptTimeDep: string;
    illnessDate: string;
    emergencyType: string;
    department: string;
    profile: string;
    ward: string;
    finsource: string;
    // Доставлен в стационар
    emergency: boolean;
    plan: boolean;
    injuryType: string;
    transportType: string;
    bloodGroup: string;
    rH: boolean;
    // Выписка
    dischargeDate: string;
    dischargeTime: string;
    dischargeDays: number;
    dischargeResult: string;
    dischargeTreatment: string;
    // Больничный лист
    sickListNumber: number;
    sickListRegDate: string;
    sickListOpenDate: string;
    sickListCloseDate: string;
    stationaryDays: number;
    doctor: string;

    constructor() { }
}
