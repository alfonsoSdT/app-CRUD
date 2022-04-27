import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/modelo/usuario';
import { FormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import * as data from '../../../assets/users.json';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  sesionIniciada:boolean = false;

  formularioLogIn = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.required,Validators.maxLength(15)])
  })  
  constructor(private _loginService: LoginService) { 
  }
  onSubmit() {
    // Comprobar validez del formulario (si el formulario no es valido, boton LogIn disabled)
    // comprobarSiEsIgual para navegar
    this.sesionIniciada = this.comprobarSiEsIgual();
    //Navegar  
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
}


