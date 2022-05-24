import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
   *CHecks the name and password with users mocked
   * @param nombre name.
   * @param password password
   * @returns boolean, true if both match.
   */
  public checkUser(nombre: string, password: string): boolean {
    const value = this.data.filter((data: { name: string; password: string; }) => data.name == nombre && data.password == password)
    return value.length !==0;
  }
  /**
   * Adds the name of the user checked into the lockal storage
   * @param nombre name of the user allready checked
   */
  public addUser(nombre: string):void{ 
    localStorage.setItem('usuario_iniciado:', nombre);
    this.session = true;
  }
  /**
   * Closes de Session by calling the crudService and navegate to de LogIn 
   */
  closeSession():void{
    localStorage.clear();
    this.session = false;
  }
  /**
   * Gets the name of the user logged in
   * @returns string | null
   */
  getUserLog():string | null{
    return localStorage.getItem('usuario_iniciado:');
  }

}

 


