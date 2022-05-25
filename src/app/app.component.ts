import { Component, OnChanges, SimpleChanges } from '@angular/core';
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
  userLog!: string | null;
  
  constructor(public loginService:LoginService, private _crudService: CrudService, private _route: Router){
  }

  /**
   * Closes de Session by calling the loginService and navegate to de LogIn 
   */
   closeSession():void{
    this.loginService.closeSession();
    this._route.navigate(['/']);
  }
  /**
   * Navegates to crud component
   */
  home():void {
    this._route.navigate(['/crud']);
  }
}
