import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Date } from 'core-js/library/web/timers';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const stories = [
            {
                id: 11,
                receiptDate: "01.12.2017 11:22:00",
                dischargeDate: "04.12.2017 11:22:00",
                department: "Хоз рассчет",
                ward: "110",
                cotDays: 3,
                bloodGroup: "4",
                rH: true,
                name: "Ivanov Ivan",
                age: 25,
                diagnosis: "bolen",
                emergency: true,
                plan: false,
                firstTime: true,
                initialTreatment: "doma",
                doctor: "iBolit",
            }
        ];
        return { stories };
    }
}
