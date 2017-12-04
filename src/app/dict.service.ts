import { Injectable } from '@angular/core';

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

}
