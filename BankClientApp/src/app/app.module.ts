import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppComponent } from './components/app/app.component';

import { AuthService } from './services/auth/auth.service';
import { LocalstorageService } from './services/local-storage/local-storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    LocalstorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
