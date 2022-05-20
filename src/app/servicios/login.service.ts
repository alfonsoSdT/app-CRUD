import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../../assets/users.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  
  constructor(private httpClient: HttpClient ) { 
  }
  /**
   * Funcion que comprueba los datos del formulario con los de los usuarios mockeados, devuelve true si 
   * nombre y contraseña coinciden con algun usuario. 
   * @param nombre Nombre de usuario a comprobar.
   * @param password Contraseña del usuario
   * @returns Boolean si el usuario existe.
   */
  public obtenerUsuarioPorNombre(nombre: string, password: string): boolean {
    const value = data.filter(data => data.name == nombre && data.password == password);
    return value.length !==0;
  }
  public addUsuario(nombre: string){ 
    localStorage.setItem('usuario_iniciado:', nombre);  
  }
  obtenerUsuarioIniciado(){
    return localStorage.getItem('usuario_iniciado:');
  }
  isLogged():boolean {
    let h = false;
    if(localStorage.getItem('usuario_iniciado:')){h = true}
    return h
  }
}

 


