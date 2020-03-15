import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './modules/user-routing/user-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    MyProfileComponent,
    SettingsComponent,
    SideMenuComponent,
    HeaderMenuComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
