import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Date } from 'core-js/library/web/timers';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const stories = [
            {
                id: 11,
                receiptDate: "2017-12-04",
                receiptTime: "11:22",
                dischargeDate: "2017-12-11",
                dischargeTime: "10:00",
                department: "Хоз рассчет",
                bloodGroup: "IV",
                rH: true,
                firstName: "Иван",
                lastName: "Иванов",
                middleName: "Иванович",
                name: "Иванов Иван Иванович",
                age: 25,
                emergency: true,
                plan: false,
                dischargeTreatment: "Лечение",
                doctor: "В.В. Раевский"
            }
        ];
        return { stories };
    }
}
