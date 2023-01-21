import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SettingsComponent} from "./settings/settings.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
