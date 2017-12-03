import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'app/header.service';

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
      this.header.setUser(this.form.get('userName').value);
      this.router.navigate(['/stories']);
    }
    this.formSubmitAttempt = true;
  }
}
