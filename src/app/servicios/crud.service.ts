import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  addUsuario(nombre:string, password: string, id: number, firstName: string, age: number, salario: number){
    let h = {
      id: id,
      name: nombre,
      password: password,
      firstName: firstName,
      age: age,
      salary: salario
    } 
    localStorage.setItem('usuario_id:' + h.id, JSON.stringify(h)); 
  }
}
