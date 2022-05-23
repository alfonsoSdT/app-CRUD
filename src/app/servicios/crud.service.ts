import { Injectable } from '@angular/core';
import data from '../../assets/clientes.json';
import { Client } from '../modelo/client';

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
  addUser(h: Client){
    data.push(h)
  }
  /**
   * Funcion que recibe de clientes.json todos los clientes mockeados y los devuelve en forma de string
   * @returns Devuelve el string de todos los clientes mockeados
   */
  getUsers():string{
    var h: string;
    h = JSON.stringify(data);
    return h;
  }
  /**
   * Funcion que elimina un cliente dado un id que se pasa por parametro
   * @param id recibe como parametro el id del cliente a eliminar
   */
  deleteUser(id: number){
    data.splice(id-1,1)
  }
  /**
   * Funcion que devuelve el nombre del usuario que ha iniciado sesion
   * @returns devuelve el nombre del usuarios que ha iniciado sesion
   */
  getUserLogIn(){
    return localStorage.getItem('usuario_iniciado:');
  }
  editUser(h:Client){
    data[h.id-1] = h;
  }
  getLastID(){
    var id,h;
    h = data[data.length-1];
    return h.id;
  }
  /**
   * 
   * @param id id del cliente a modificar
   * @returns los datos del cliente
   */
  getUser(id:number){
    const h = data.find(data => data.id == id)
    return JSON.stringify(h);
  }
  
}
