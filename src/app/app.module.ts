import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HomeModule } from './home/home.module';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeService } from './shared/stepper.service';
import { AuthService } from './shared/auth.service';
import { CustomerListComponent } from './customer/customer-list.component';
import { DetailComponent } from './customer/details/detail.component';
import { EmployerDetailGuard } from './customer/details/customer-details-guard';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
  ],

  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    CustomerListComponent,
    DetailComponent
  ],

  providers: [EmployeeService, AuthService, EmployerDetailGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
