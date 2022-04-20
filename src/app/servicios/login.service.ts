import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from '../../assets/users.json';
import { User } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarios: User[] = [];
  constructor(private httpClient: HttpClient ) { }

  public firstWay():void{
    console.log(data);    
  }

  public prueba(): void{
    //Devuelve los users que hay en el json
    const usuario = this.httpClient.get<User>("assets/users.json");
  }
}
