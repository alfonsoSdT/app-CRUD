import { Injectable } from '@angular/core';
import data from '../../assets/clientes.json';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  constructor() { }
  /**
   * Funcion que se encarga de añadir un cliente al resto de clientes mockeados
   * @param nombre nombre del cliente
   * @param id id del cliente
   * @param firstName nombre de la persona
   * @param lastName apellido de la persona
   * @param age edad de la persona
   * @param salario salario del cliente
   */
  addUsuario(nombre:string, id: number, firstName: string, lastName:string ,age: number, salario: number){
    let h = {
      id: id,
      name: nombre,
      first_name: firstName,
      last_name: lastName,
      age: age,
      salary: salario
    } 
    data.push(h)
  }
  /**
   * Funcion que recibe de clientes.json todos los clientes mockeados y los devuelve en forma de string
   * @returns Devuelve el string de todos los clientes mockeados
   */
  mostrarUsuarios():string{
    var h: string;
    h = JSON.stringify(data);
    return h;
  }
  /**
   * Funcion que elimina un cliente dado un id que se pasa por parametro
   * @param id recibe como parametro el id del cliente a eliminar
   */
  eliminarUsuario(id: number){
    data.splice(id-1,1)
  }
  /**
   * Funcion que devuelve el nombre del usuario que ha iniciado sesion
   * @returns devuelve el nombre del usuarios que ha iniciado sesion
   */
  obtenerUsuarioIniciado(){
    return localStorage.getItem('usuario_iniciado:');
  }
  /**
   * 
   * @param id id del cliente a modificar
   * @returns los datos del cliente
   */
  obtenerUsuario(id:number){
    return data.find(obj=> obj.id === id )
  }
  
}
