import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './componentes/crud/crud.component';
import { LoginComponent } from './componentes/login/login.component';
import { AddUserComponent } from './componentes/crud/add/add-user/add-user.component';
import { ModificateUserComponent } from './componentes/crud/modificate/modificate-user/modificate-user.component';

const routes: Routes = [
  { path: 'CRUD', component: CrudComponent},
  { path: '', redirectTo: 'LogIn', pathMatch: 'full'},
  { path: 'LogIn', component: LoginComponent},
  { path: 'CRUD/add', component: AddUserComponent},
  { path: 'CRUD/mod/:id', component: ModificateUserComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
