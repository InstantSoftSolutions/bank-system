import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './modules/account-routing/account-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
