import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/modelo/usuario';
import { FormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import * as data from '../../../assets/users.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  muestraModal = false;
  sesionIniciada:boolean = false;
  formularioLogIn: FormGroup;
  userAdded= false;
   
  constructor(private _loginService: LoginService, private _route: Router) { 
    this.formularioLogIn = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.required,Validators.maxLength(15)])
    }) 
  }
  onSubmit() {
    // Comprobar validez del formulario (si el formulario no es valido, boton LogIn disabled)
    // comprobarSiEsIgual para navegar
    this.sesionIniciada = this.comprobarSiEsIgual();
    //Navegar  
    if(this.sesionIniciada){
      //Añadimos el usuario al local Storage
      this.addUsuario();
      //Navegamos al componente CRUD
      this._route.navigate(['/CRUD']);
    }
    else {
       this.displayModal();
    }
  }

  get nombreDelUsuario(){
    return this.formularioLogIn.get('nombre');
  }
  get passwordDelUsuario(){
    return this.formularioLogIn.get('password');
  }
  ngOnInit(): void {
    
  }

  /**
   * Funcion que llama al servicio para hacer la comprobacion del usuario y de 
   * la contraseña con los usuarios mockeados
   * @returns 
   */
  comprobarSiEsIgual():boolean{
    // Recuperar datos del formulario
    return this._loginService.obtenerUsuarioPorNombre(this.nombreDelUsuario?.value,this.passwordDelUsuario?.value)
  }
  /**
   * Funcion que se encarga de actualizar muestraModal cuando el usuario y/o la contraseña no son correctos
   * @returns 
   */
  displayModal(){
    if(this.muestraModal){ this.muestraModal = false;}
    else{ this.muestraModal = true;}
  }
  /**
   * Funcion que se encarga de añadir el usuario que recibimos al localStorage
   * @returns
   */
  addUsuario(){
    this._loginService.addUsuario(this.nombreDelUsuario?.value,this.passwordDelUsuario?.value);
  }
}


