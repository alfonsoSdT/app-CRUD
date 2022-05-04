import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  data from '../../assets/users.json';

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
  public addUsuario(nombre: string, password: string){
      let h = {
        id: 0,
        name: nombre,
        password: password,
        firstName: '',
        age: 0,
        salario: 0
      } 
      localStorage.setItem('usuario_id:' + h.id, JSON.stringify(h));  
      
  }
}

 


