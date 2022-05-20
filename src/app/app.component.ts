import { Component } from '@angular/core';
import { LoginService } from './servicios/login.service';
import { CrudService } from './servicios/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-crud';
  session:boolean = false;
  userLog!: string | null;
  
  constructor(private _loginService:LoginService, private _crudService: CrudService, private _route: Router){
    this.session= this._loginService.isLogged();
    this.getUserLoggedIn();
  }

  /**
   * Closes de Session by calling the crudService and navegate to de LogIn 
   */
   closeSession():void{
    this._crudService.closeSession();
    this._route.navigate(['/']);
  }
  /**
   * Get the name of the user logged in
   */
   getUserLoggedIn():void{
    this.userLog = this._crudService.getUserLogIn();
  }
  home():void {
    this._route.navigate(['/crud']);
  }
}
