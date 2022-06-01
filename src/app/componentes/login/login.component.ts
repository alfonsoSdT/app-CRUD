import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  muestraModal = false;
  sesionIniciada:boolean = false;

  errorDisplayName:boolean = false;
  errorDisplayPassword:boolean = false;
  tried:boolean = false;

  formularioLogIn: FormGroup;
  userAdded= false;
   
  constructor(private _loginService: LoginService, private _route: Router) { 
    this.formularioLogIn = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.required,Validators.maxLength(15)])
    }) 
  }
  onSubmit() {  
    this.onSubmitWithParams(this.nombreDelUsuario?.value, this.passwordDelUsuario?.value); 
  }
  onSubmitWithParams(name:string, psw: string){
    this.setErrorName(name);
    this.setErrorPassword(psw);
    if (!(name == '') && !(psw == ''))  {
      this.sesionIniciada = this.checkUser(name, psw);
      if(this.sesionIniciada){
        this.addUser(name);
        this._route.navigate(['crud']);
      }
      else {
         this.displayModal();
      }
    }
  }
  setErrorName(nombreDelUsuario:string):void{
    if(nombreDelUsuario == '' && this.nombreDelUsuario?.errors?.required )
    {this.errorDisplayName = true; this. tried = true;}
    else{this.errorDisplayName=false;}
  }
  setErrorPassword(passwordDelUsuario:string):void{
    if(passwordDelUsuario == '' && this.passwordDelUsuario?.errors?.required )
      {this.errorDisplayPassword = true; this.tried=true;}
    else{ this.errorDisplayPassword = false;}
  }

  /**
   * Function that checks if the user exist in the database
   * @returns true if User exist in database otherwise it returns false
   */
  checkUser(name:string, psw: string):boolean{
    return this._loginService.checkUser(name , psw)
  }
  /**
   * Displays the modal if someone tries to logIn and the name of the user and password doesnt mach
   *  with any of the users 
   */
  displayModal():void{
    if(this.muestraModal){ this.muestraModal = false;}
    else{ this.muestraModal = true;}
  }
  /**
   * Adds the name of the user logged in into de localStorage
   */
  addUser(name: string ):void{
    this._loginService.addUser(name);
  }

  /**
   * Gets the name of the user and password of the user from the form
   */
  get nombreDelUsuario(){
    return this.formularioLogIn.get('nombre');
  }
  get passwordDelUsuario(){
    return this.formularioLogIn.get('password');
  }
}


