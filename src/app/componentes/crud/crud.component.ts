import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  usuarioIni: any;
  userJson: any;
  usuarios = new Array(4); //Lista de usuarios del localStorage (formato JSON)
  usuario1: any;
  usuario2: any;
  userJson1: any;
  userJson2: any;
  data:any;

  constructor(private _crudService: CrudService, private _route: Router) { 
    this.obtenerUsuarioIniciado();
    this.data = JSON.parse(this._crudService.mostrarUsuarios());  
  }

  ngOnInit(): void {
  }
  /**
   * 
   */
  addUsuario(){
    this._route.navigate(['/CRUD/add']);
  }
  /**
   * 
   */
  obtenerUsuarioIniciado(){
    this.usuarioIni = this._crudService.obtenerUsuarioIniciado();
  }

  eliminarUsuario(id: string){
    // LLamada al servicio para borrar por id
  } 

}
