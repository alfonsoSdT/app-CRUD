import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './componentes/crud/crud.component';
import { LoginComponent } from './componentes/login/login.component';
import { AddUserComponent } from './componentes/crud/add-user/add-user.component';
import { ModificateUserComponent } from './componentes/crud/modificate-user/modificate-user.component';

const routes: Routes = [
  { path: 'crud', component: CrudComponent},
  { path: '', redirectTo: 'LogIn', pathMatch: 'full'},
  { path: 'LogIn', component: LoginComponent},
  { path: 'crud/add', component: AddUserComponent},
  { path: 'crud/edit/:id', component: ModificateUserComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
