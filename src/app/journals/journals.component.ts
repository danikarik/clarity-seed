import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';
import { DictService } from '../dict.service';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.scss']
})
export class JournalsComponent implements OnInit {

  constructor(
    public header: HeaderService,
    private dictService: DictService) { }

  ngOnInit() {
    this.header.show();
  }

}
