import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../../assets/users.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  data: any;
  session:boolean = false;
  constructor(private httpClient: HttpClient ) { 
    this.httpClient.get('assets/users.json').subscribe({
      next: (v) => { this.data = v; console.log(this.data); },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }
  /**
   * Funcion que comprueba los datos del formulario con los de los usuarios mockeados, devuelve true si 
   * nombre y contraseña coinciden con algun usuario. 
   * @param nombre Nombre de usuario a comprobar.
   * @param password Contraseña del usuario
   * @returns Boolean si el usuario existe.
   */
  public obtenerUsuarioPorNombre(nombre: string, password: string): boolean {
    const value = data.filter(data => data.name == nombre && data.password == password)
    return value.length !==0;
  }
  public addUsuario(nombre: string){ 
    localStorage.setItem('usuario_iniciado:', nombre);
    this.session = true;
  }

  closeSession(){
    localStorage.clear();
    this.session = false;
  }
  obtenerUsuarioIniciado(){
    return localStorage.getItem('usuario_iniciado:');
  }

}

 


