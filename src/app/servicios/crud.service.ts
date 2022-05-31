import { Injectable } from '@angular/core';
import { Client } from '../modelo/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  data:any;
  constructor(private httpClient:HttpClient) {
    this.httpClient.get('assets/clientes.json').subscribe({
      next: (v) => { this.data = v; console.log(this.data); },
      error: (e) => console.error(e),
      complete: () => console.info('complete')});
  }
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
    this.data.push(h);
  }
  /**
   * Gets all the clients mocked and return a string with all of them
   * @returns 
   */
  public getUsers():string{
    var h: string;
    h = JSON.stringify(this.data);
    return h;
  }
  /**
   * Deletes the user given an d
   * @param id 
   */
  public deleteUser(id: number):void{
    this.data.splice(id-1,1)
  }

  /**
   * Modificate the client
   * @param h 
   */
  public editUser(h:Client):void{
    this.data[h.id-1] = h;
  }
  /**
   * Gets the last id in use
   * @returns last id
   */
  public getLastID():number{
    var id,h;
    h = this.data[this.data.length-1];
    return h.id;
  }
  /**
   * Get the info from a client given an id
   * @param id 
   * @returns 
   */
  public getUser(id:number):string{
    const h = this.data.find((data: { id: number; }) => data.id == id)
    return JSON.stringify(h);
  }
}
