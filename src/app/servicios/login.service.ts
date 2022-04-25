import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarios: User[] = [];
  constructor(private httpClient: HttpClient ) { }

  public firstWay():void{ 
    getDatos();    
  }
  public addUsuario():void {

  }
  public hacerLogIn():void{
    
  }
}
var miNombre = document.getElementById('nombre');
var miPass = document.getElementById('password');
//Coger del DOM el nombre y las pass
function getDatos(){
  miNombre?.addEventListener('click', function(){
    console.log("Se ha recobido el nombre")
  })
  miPass?.addEventListener('click', function(){
    console.log("Se ha recobido la password")
  })
  
}
