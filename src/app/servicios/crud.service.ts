import { Injectable } from '@angular/core';
import data from '../../assets/clientes.json';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  addUsuario(nombre:string, password: string, id: number, firstName: string, age: number, salario: number){
    
  }
  mostrarUsuarios():string{
    var h: string;
    h = JSON.stringify(data);
    return h;

    // Asignar a una variable.
  }
  obtenerUsuarioIniciado(){
    return localStorage.getItem('usuario_iniciado:');
  }
  
}
