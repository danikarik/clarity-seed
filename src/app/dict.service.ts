import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators/retry';

@Injectable()
export class DictService {

    constructor() { }

    getNationality() {
        return [
            "Казах/Казашка",
            "Русский/Русская",
            "Уйгур/Уйгурка"
        ];
    }

    getRegions() {
        return [
            "Астана",
            "Алматы",
            "Акмолинская область",
            "Актюбинская область",
            "Алматинская область",
            "Атырауская область",
            "Восточно-Казахстанская область",
            "Жамбылская область",
            "Западно-Казахстанская область",
            "Карагандинская область",
            "Костанайская область",
            "Кызылординская область",
            "Мангистауская область",
            "Павлодарская область",
            "Северо-Казахстанская область",
            "Южно-Казахстанская область"
        ];
    }

    getDistricts() {
        return [
            "Алатауский",
            "Алмалинский",
            "Ауэзовский",
            "Бостандыкский",
            "Медеуский",
            "Наурызбайский",
            "Турксибский",
            "Жетысуский"
        ]
    }

    getDocTypes() {
        return [
            "Паспорт",
            "Удостоверение личности"
        ]
    }

    getInsuranceCompanies() {
        return [
            "Eurasian",
            "KazKom"
        ]
    }

    getSocialStatutes() {
        return [
            "Не женат/Не замужем",
            "Состоит в браке"
        ]
    }

    getNurses() {
        return [
            "Сапарбекова Нуржамал",
            "Иванова Людмила",
            "Шаштай Замангуль"
        ]
    }

    getAddrFroms() {
        return [
            "ПМСП",
            "КДП",
            "Самообращение",
            "Скорой помощью",
            "Другим стационаром",
            "Военкоматом",
            "Роддом",
            "Прочие"
        ]
    }

    getEmergencyTypes() {
        return [
            "Экстренная в первые 6 часов от начала заболевания"
        ]
    }

    getDepartments() {
        return [
            "ПРИЕМНЫЙ ПОКОЙ"
        ]
    }

    getInjuryTypes() {
        return [
            "Травма 1",
            "Травма 2"
        ]
    }

    getTransportTypes() {
        return [
            "Транспорт 1",
            "Транспорт 2"
        ]
    }

    getBloodGroups() {
        return [
            "I",
            "II",
            "III",
            "IV"
        ]
    }

    getDischargeResults() {
        return [
            "Результат 1",
            "Результат 2",
            "Результат 3",
            "Результат 4"
        ]
    }

    getDischargeTreatments() {
        return [
            "Лечение 1",
            "Лечение 2",
            "Лечение 3",
            "Лечение 4"
        ]
    }

    getDoctors() {
        return [
            "Доктор 1",
            "Доктор 2",
            "Доктор 3",
            "Доктор 4"
        ]
    }

    getProfiles() {
        return [
            "Профиль 1",
            "Профиль 2",
            "Профиль 3",
            "Профиль 4"
        ]
    }

    getWards() {
        return [
            "Палата 1",
            "Палата 2",
            "Палата 3",
            "Палата 4"
        ]
    }

    getFinsources() {
        return [
            "Источник 1",
            "Источник 2",
            "Источник 3",
            "Источник 4"
        ]
    }

    getNoteTypes() {
        return [
            "Дневник",
            "Обоснование диагноза",
            "Обоснование клинического диагноза",
            "Консилиум",
            "Обход заведущего отделением",
            "Общий обход врача",
            "Осмотр врача применого отделения",
            "Осмотр дежурного врача",
            "Осмотр заместителя главного врача",
            "Осмотр лечащего врача",
            "Осмотр врача-консультанта",
            "Совместный осмотр",
            "Выписной эпикриз",
            "КЭК",
            "Паталогоанатомический эпикриз",
            "Переводный эпикриз",
            "Посмертный эпикриз"
        ]
    }
}
