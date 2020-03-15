import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Token } from './models/token.model';

@Injectable()
export class LocalstorageService {
  private _token: string;

  constructor(private router: Router) {
    this._token = localStorage.getItem('access_token');
  }

  get token(): string {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }

  parseToken(): Token {
    const base64Url = this._token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const tokenModel = JSON.parse(window.atob(base64));
    let token = new Token();
    token.roles = tokenModel.roles;
    token.fullName = tokenModel.fullName;
    token.email = tokenModel.email;
    return token;
  }

  getEmail(): string {
    const base64Url = this._token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const tokenModel = JSON.parse(window.atob(base64));
    let token = new Token();
    token.roles = tokenModel.roles;
    token.fullName = tokenModel.fullName;
    token.email = tokenModel.email;
    return token.email;
  }

  login(): void {
    localStorage.setItem('access_token', this._token);
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}
