import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/modelo/usuario';
import { FormsModule } from '@angular/forms'
import { LoginService } from 'src/app/servicios/login.service';
import * as data from '../../../assets/users.json';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios = JSON.stringify(data);
  usuario:string = "AlfonsoSdT";
  @Input() nombre: string = "";

  usuarioPrueba: User = new User(1,"AlfonsoSdT","SanchezDeToca","Alfonso","SanchezDeToca",23, 123123);
  constructor(private loginService: LoginService) { 
  }

  ngOnInit(): void {
  }
  comprobarLogin(): any{
    //Obtengo el nombre del HTML

  }


}
