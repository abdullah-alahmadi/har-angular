import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./settings/settings.component";
import { LoginComponent } from "./login/login.component";
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [

  {
    path: 'dashboard', component: DashboardComponent,
    // canActivate: [AngularFireAuthGuard], data: { redirectUnauthorizedToLogin }
  },
  {
    path: 'login', component: LoginComponent,
    // canActivate: [AngularFireAuthGuard], data: { redirectLoggedInToDashboard }
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
