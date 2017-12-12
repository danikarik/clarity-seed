import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'app/header.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private fb: FormBuilder, private router: Router, public header: HeaderService) { }

  ngOnInit() {
    this.header.hide();
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      subSystem: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      let userName = this.form.get('userName').value;
      this.header.setUser(userName);
      switch (userName) {
        case "admin": {
          this.router.navigate(['/stories']);
          break;
        }
        case "register": {
          this.router.navigate(['/stories']);
          break;
        }
        case "nurse": {
          this.router.navigate(['/journals']);
          break;
        }
        case "doctor": {
          this.router.navigate(['/stories']);
          break;
        }
      }
      
    }
    this.formSubmitAttempt = true;
  }
}
