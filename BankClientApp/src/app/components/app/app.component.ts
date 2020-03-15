import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LocalstorageService } from '../../services/local-storage/local-storage.service';

import { Token } from '../../services/local-storage/models/token.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private localStorageService: LocalstorageService, private router: Router) {

    let token = this.localStorageService.token;

    if (token !== undefined && token !== '' && token !== null) {
      let tokenModel: Token = this.localStorageService.parseToken();
      if (tokenModel.roles.includes('ADMIN')) {
        this.router.navigate(['admin']);
      }
      else if (tokenModel.roles.includes('USER')) {
        this.router.navigate(['user']);
      }
    }
    else {
      this.router.navigate(['account']);
    }
  }
}
