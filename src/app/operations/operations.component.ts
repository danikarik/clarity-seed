import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';
import { DictService } from '../dict.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  constructor(
    public header: HeaderService,
    private dictService: DictService) { }

  ngOnInit() {
    this.header.show();
  }

}
