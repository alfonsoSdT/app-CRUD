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
  public addUser(h: Client):void{
    data.push(h)
  }
  /**
   * Gets all the clients mocked and return a string with all of them
   * @returns 
   */
  public getUsers():string{
    var h: string;
    h = JSON.stringify(data);
    return h;
  }
  /**
   * Deletes the user given an d
   * @param id 
   */
  public deleteUser(id: number):void{
    data.splice(id-1,1)
  }

  /**
   * Modificate the client
   * @param h 
   */
  public editUser(h:Client):void{
    data[h.id-1] = h;
  }
  /**
   * Gets the last id in use
   * @returns last id
   */
  public getLastID():number{
    var id,h;
    h = data[data.length-1];
    return h.id;
  }
  /**
   * Get the info from a client given an id
   * @param id 
   * @returns 
   */
  public getUser(id:number):string{
    const h = data.find(data => data.id == id)
    return JSON.stringify(h);
  }
}
