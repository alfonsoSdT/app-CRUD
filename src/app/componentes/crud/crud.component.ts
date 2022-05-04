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
  constructor(private _crudService: CrudService, private _route: Router) { 
    this.usuarioIni = localStorage.getItem('usuario_id:0');
    this.userJson = JSON.parse(this.usuarioIni);
    console.log(this.usuarioIni)
    
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
    var i;
    for(i=1;i<=4;i++){ 
      this.usuario2 = localStorage.getItem('usuario_id:' + i)
      this.usuarios[i] = JSON.parse(this.usuario2)
      console.log("Se imprime el usuario " + this.usuario2) 
    }
    
  }
  

}
