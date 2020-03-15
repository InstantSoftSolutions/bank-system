import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private accountService: AccountService) { }

  ngOnInit(): void {
    this.loginForm = this.generateLoginForm();
  }

  onSignInButtonClicked(): void {
    if (this.loginForm.valid) {

    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }

  private generateLoginForm(): FormGroup {
    let emailFormControl = this.formBuilder.control(null, [
      Validators.required,
      Validators.email
    ]);

    let passwordFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    return this.formBuilder.group({
      email: emailFormControl,
      password: passwordFormControl
    });
  }
}
