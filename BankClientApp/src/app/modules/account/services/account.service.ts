import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ChangePasswordModel } from './models/change-password.model';
import { Login } from './models/login.model';
import { RegisterModel } from './models/register.model';
import { ForgotPasswordModel } from './models/forgot-password.model';
import { ProfileModel } from './models/profile.model';

import { BASE_URL } from '../../../utilities/consts/consts';

const ACCOUNT_URL = 'api/account/';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  register(model: RegisterModel): Observable<string> {
    return this.httpClient.post<string>(BASE_URL + ACCOUNT_URL + 'register', model);
  }

  login(model: Login): Observable<string> {
    /*
    Successfull request: Server should returns JWT token.
    Failure: 'Account with these credentials doesn't exist.'
    */
    return this.httpClient.post<string>(BASE_URL + ACCOUNT_URL + 'login', model);
  }

    // REQUIRED TOKEN AS HTTP PARAM !
  logout(): Observable<string> {
    /*
    Successfull request: 'You're logged out.'
    */
    return this.httpClient.post<string>(BASE_URL + ACCOUNT_URL + 'logout', null);
  }

  forgotPassword(model: ForgotPasswordModel): Observable<string> {
     /* Server should returns message.
     For example:
     Successfull message: 'Check your email for more details.' or
     Failure message: 'Something went wrong. Your request failed.'
    */
    return this.httpClient.post<string>(BASE_URL + ACCOUNT_URL + 'forgot-password', model);
  }

    // REQUIRED TOKEN AS HTTP PARAM !
  changePassword(model: ChangePasswordModel): Observable<string> {
    /* Server should returns message.
    For example:
    Successfull message: 'Password has been changed successfully.' or
    Failure message: 'Change password request failed. Check your password'
    */
    return this.httpClient.post<string>(BASE_URL + ACCOUNT_URL + 'change-password', model)
  }
    // REQUIRED TOKEN AS HTTP PARAM !
  getProfile(): Observable<ProfileModel> {
    return this.httpClient.get<ProfileModel>(BASE_URL + ACCOUNT_URL + 'profile')
  }
}
