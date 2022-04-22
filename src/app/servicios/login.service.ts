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
  }
  public addUsuario():void {

  }
  public hacerLogIn():void{
    
  }
}
