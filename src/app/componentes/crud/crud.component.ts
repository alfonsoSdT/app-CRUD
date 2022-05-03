import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  usuarioIni: any;
  userJson: any;
  constructor() { 
    this.usuarioIni = localStorage.getItem('usuario');
    this.userJson = JSON.parse(this.usuarioIni);
  }

  ngOnInit(): void {
    this.usuarioIni = localStorage.getItem('usuario');
  }
  addUsuario(){

  }
  eliminarUsuario(){

  }
  crearUsuario(){

  }
  

}
