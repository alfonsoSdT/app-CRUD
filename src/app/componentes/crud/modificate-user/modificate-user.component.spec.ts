import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CrudService } from 'src/app/servicios/crud.service';
import { LoginComponent } from '../../login/login.component';

import { ModificateUserComponent } from './modificate-user.component';
import { LoginService } from '../../../servicios/login.service';

describe('ModificateUserComponent', () => {
  let component: ModificateUserComponent;
  let fixture: ComponentFixture<ModificateUserComponent>;

  let crudService: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        ModificateUserComponent,
        CrudService,
        LoginService
      ]
    });
    crudService = TestBed.inject(CrudService);
    fixture = TestBed.createComponent(ModificateUserComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get user Logged', () => {
    it('should be true', () => {
      localStorage.setItem('usuario_iniciado:', 'A')
      component.getUserLogIn();
      let ret = component.usuarioIni === 'A';
      expect(ret).toBeTruthy();
    });
  });

  describe('get user from id', () => {
    it('should be true', () => {
      crudService.data = [
        {
          id: 1,
          name: 'Test1',
          firstName: 'Test1',
          lastName: 'Test1',
          age: 1,
          salary: 1
        },{
          id: 2,
          name: 'Test2',
          firstName: 'Test2',
          lastName: 'Test2',
          age: 2,
          salary: 2
        }
      ];
      let client = component.getUser('2');
      let client2 = {id: 2,name: 'Test2',firstName: 'Test2',lastName: 'Test2',age: 2,salary: 2};
      expect(client).toStrictEqual(client2);
    });
  });

});
