import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudService } from '../../servicios/crud.service';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../../servicios/login.service';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        LoginService
      ]
    });
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
  })
});
