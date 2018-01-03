import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'create', component: NoteCreateComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [ 
     RouterModule.forRoot(routes),
     HttpClientModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }