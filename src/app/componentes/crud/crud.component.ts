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

  constructor(private _crudService: CrudService, private _route: Router) { 
    this.usuarioIni = localStorage.getItem('usuario_id:0');
    this.userJson = JSON.parse(this.usuarioIni);

    console.log(this.userJson)
    this.mostrarUsuarios();
    
  }

  ngOnInit(): void {
    
  }
  addUsuario(){
    this._route.navigate(['/CRUD/add']);
  }

  eliminarUsuario(){

  }
  crearUsuario(){

  }
  mostrarUsuarios(){
    this.usuario1 = localStorage.getItem('usuario_id:1');
    this.userJson1 = JSON.parse(this.usuario1);

    this.usuario2 = localStorage.getItem('usuario_id:2');
    this.userJson2 = JSON.parse(this.usuario2);

    
    console.log(this.userJson1)
    console.log(this.userJson2)
    
  }
  

}
