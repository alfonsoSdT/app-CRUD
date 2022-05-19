import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CrudComponent } from './componentes/crud/crud.component';
import { LoginComponent } from './componentes/login/login.component';
import { AddUserComponent } from './componentes/crud/add-user/add-user.component';
import { ModificateUserComponent } from './componentes/crud/modificate-user/modificate-user.component';
import { LoginGuardGuard } from './guard/login-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'crud', component: CrudComponent, canActivate: [LoginGuardGuard]},
  { path: 'crud/add', component: AddUserComponent, canActivate: [LoginGuardGuard]},
  { path: 'crud/edit/:id', component: ModificateUserComponent, canActivate: [LoginGuardGuard]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
