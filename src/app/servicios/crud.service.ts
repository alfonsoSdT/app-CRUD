import { Injectable } from '@angular/core';
import data from '../../assets/clientes.json';
import { Client } from '../modelo/client';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  constructor() { }
  /**
   * Adds a client to the clients saved
   * @param nombre name
   * @param id id 
   * @param firstName first name
   * @param lastName last name
   * @param age age
   * @param salario salary
   */
  addUser(h: Client){
    data.push(h)
  }
  /**
   * Gets all the clients mocked and return a string with all of them
   * @returns 
   */
  getUsers():string{
    var h: string;
    h = JSON.stringify(data);
    return h;
  }
  /**
   * Deletes the user given an d
   * @param id 
   */
  deleteUser(id: number){
    data.splice(id-1,1)
  }

  /**
   * Modificate the client
   * @param h 
   */
  editUser(h:Client){
    data[h.id-1] = h;
  }
  /**
   * Gets the last id in use
   * @returns last id
   */
  getLastID(){
    var id,h;
    h = data[data.length-1];
    return h.id;
  }
  /**
   * Get the info from a client given an id
   * @param id 
   * @returns 
   */
  getUser(id:number){
    const h = data.find(data => data.id == id)
    return JSON.stringify(h);
  }
}
