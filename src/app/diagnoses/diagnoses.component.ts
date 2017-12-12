import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';
import { DictService } from '../dict.service';

@Component({
  selector: 'app-diagnoses',
  templateUrl: './diagnoses.component.html',
  styleUrls: ['./diagnoses.component.scss']
})
export class DiagnosesComponent implements OnInit {

  constructor(
    public header: HeaderService,
    private dictService: DictService) { }

  ngOnInit() {
    this.header.show();
  }

}
