import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';
import { DictService } from '../dict.service';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

    public open: boolean = false;

    records: any[] = [
        {
            id: 1,
            title: "row 1"
        },
        {
            id: 2,
            title: "row 2"
        }
    ];

    constructor(
        public header: HeaderService,
        public dictService: DictService) { }

    ngOnInit() { this.header.show(); }

    add() {
        console.log("add");
    }

    edit() {
        console.log("edit");
    }

    delete() {
        console.log("delete");
    }

}
