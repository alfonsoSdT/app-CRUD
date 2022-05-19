import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './componentes/crud/add-user/add-user.component';
import { ModificateUserComponent } from './componentes/crud/modificate-user/modificate-user.component';
import { LoginGuardGuard } from './guard/login-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrudComponent,
    AddUserComponent,
    ModificateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
