import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { AccountService } from '../../services/account.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.loginForm = this.generateLoginForm();
  }

  onSignInButtonClicked(): void {
    if (this.loginForm.valid) {
      this.subscription.add(this.accountService.login(this.loginForm.value).subscribe((token) => {
        console.log(token);
      }, (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse.message);
      }));
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
