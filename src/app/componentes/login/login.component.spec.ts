import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../../servicios/login.service';
import { CrudComponent } from '../crud/crud.component';
import { Router } from '@angular/router';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'crud', component: CrudComponent }
        ])
      ],
      providers: [
        LoginService
      ]
    });
    loginService = TestBed.inject(LoginService);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('display modal', () => {
    it('should be true', () => {
      component.muestraModal = false;
      component.displayModal();
      expect(component.muestraModal).toBeTruthy();
    });
  });

  describe('set error password', () => {
    it('should be true', () => {
      component.errorDisplayPassword = false;
      component.setErrorPassword('');
      expect(component.errorDisplayPassword).toBeTruthy();
    });

    it('should be false', () => {
      component.errorDisplayPassword = false;
      component.setErrorPassword('asdf');
      expect(component.errorDisplayPassword).toBeFalsy();
    });

  });

  describe('set error name', () => {
    it('should be true', () => {
      component.errorDisplayName = false;
      component.setErrorName('');
      expect(component.errorDisplayName).toBeTruthy();
    });

    it('should be false', () => {
      component.errorDisplayName = false;
      component.setErrorName('asdf');
      expect(component.errorDisplayName).toBeFalsy();
    });
  });

  describe('check user', () => {
    it('should be true', () => {
      loginService.data = [
        { 
          id: 1,
          name: 'qwertyuiop',
          password: 'qwertyuiop'            
        },
        { 
          id: 2,
          name: 'Alfonso',
          password: '123456789'            
        },
        { 
          id: 3,
          name: 'asdfghjklñ',
          password: 'asdfghjklñ'  
        }
      ];
      let name = 'Alfonso';
      let psw = '123456789';
      let ret = component.checkUser(name,psw);
      expect(ret).toBeTruthy();
    });
  })

  describe('add user', () => {
    it('should be true', () => {
      component.addUser('A');
      let name = localStorage.getItem('usuario_iniciado:');
      let ret = name === 'A';
      expect(ret).toBeTruthy();
    });
  });

  describe('on sbumit', () => {
    it('should be true', () => {
      component.sesionIniciada = false;

      loginService.data = [
        { 
          id: 1,
          name: 'qwertyuiop',
          password: 'qwertyuiop'            
        },
        { 
          id: 2,
          name: 'Alfonso',
          password: '123456789'            
        },
        { 
          id: 3,
          name: 'asdfghjklñ',
          password: 'asdfghjklñ'  
        }
      ];

      let name = 'Alfonso';
      let psw = '123456789';
      const navigateSpy = jest.spyOn(router, 'navigate');
      component.onSubmitWithParams(name,psw);

      expect(component.sesionIniciada).toBeTruthy();
      expect(navigateSpy).toHaveBeenCalledWith(['crud']);
    });

    it('should be true', () => {
      component.sesionIniciada = false;

      loginService.data = [
        { 
          id: 1,
          name: 'qwertyuiop',
          password: 'qwertyuiop'            
        },
        { 
          id: 2,
          name: 'Alfonso',
          password: '123456789'            
        },
        { 
          id: 3,
          name: 'asdfghjklñ',
          password: 'asdfghjklñ'  
        }
      ];

      let name = 'nameMistaken';
      let psw = 'passMistaken';

      component.onSubmitWithParams(name,psw);

      expect(component.muestraModal).toBeTruthy();
    });
  });

});
