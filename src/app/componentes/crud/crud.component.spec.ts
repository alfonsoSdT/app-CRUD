import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CrudComponent } from './crud.component';
import { CrudService } from '../../servicios/crud.service';
import { LoginService } from 'src/app/servicios/login.service';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;

  let crudService: CrudService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        CrudComponent,
        CrudService,
        LoginService
      ]
    });
    crudService = TestBed.inject(CrudService);
    crudService.data = [   
      {
          "id": 1,
          "name": "Cliente1",
          "firstName": "Alfonso",
          "lastName": "SanchezDeToca",
          "age": 23,  
          "salary": 123123        
      },
      {
          "id": 2,
          "name": "Cliente2",
          "firstName": "Jose",
          "lastName": "Diaz",
          "age": 23,
          "salary": 123123        
      }];
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get user Logged', () => {
    it('should be true', () => {
      localStorage.setItem('usuario_iniciado:', 'A')
      component.getUserLoggedIn();
      let ret = component.usuarioIni === 'A';
      expect(ret).toBeTruthy();
    });
  });

  describe('get clients', () => {
    it('should be true', () => {
      console.log(crudService.data);
        component.getUsers();        
        expect(component.data).toStrictEqual(crudService.data);
    });
  });
});
