import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
  visible: boolean;
  user: string;

  constructor() { 
    this.visible = false; 
    this.user = "";
  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  setUser(user: string) { this.user = user; }
}
