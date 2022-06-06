import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { LoginService } from './servicios/login.service';
import { CrudService } from './servicios/crud.service';
import { Router } from '@angular/router';
import { HeaderComponent } from './componentes/header/header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-crud';
  
  constructor(){
  }

  
}
