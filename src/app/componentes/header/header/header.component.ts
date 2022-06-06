import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public loginService:LoginService, private _crudService: CrudService, private _route: Router) { }

  ngOnInit(): void {
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
