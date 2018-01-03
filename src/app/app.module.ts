import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from './http-service.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BearerInterceptor} from './BearerInterceptor';
import { UserServiceService } from './user-service.service';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { RegisterComponent } from './register/register.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { AuthServiceService } from './auth-service.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    NoteDetailsComponent,
    RegisterComponent,
    NoteCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpServiceService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BearerInterceptor,
    multi: true,
  },UserServiceService, AuthServiceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
