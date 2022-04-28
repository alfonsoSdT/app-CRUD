import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './componentes/crud/crud.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: 'CRUD', component: CrudComponent},
  { path: '', redirectTo: 'LogIn', pathMatch: 'full'},
  { path: 'LogIn', component: LoginComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
