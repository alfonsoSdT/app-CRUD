import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/modelo/usuario';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import * as data from '../../../assets/users.json';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: User[] = data as User[];
  nombreUsuario:any;
  passwordUsuario:any;
  usuario:string = "AlfonsoSdT";
  sesionIniciada:boolean = false;
  
  submitted = false;

  
  constructor(private loginService: LoginService) { 
    loginService.firstWay();
  }
  onSubmit() {
    this.submitted = true;
    console.log("Submited");
  }

  ngOnInit(): void {
    
  }
  comprobarSiEsIgual():boolean{
    if(this.nombreUsuario == 'AlfonsoSdT' && this.passwordUsuario == 'SanchezDeToca'){ this.sesionIniciada = true}
    return this.sesionIniciada;
  }
}


