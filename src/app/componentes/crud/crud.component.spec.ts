import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginGuardGuard } from '../../guard/login-guard.guard';
import { LoginComponent } from '../login/login.component';
import { AddUserComponent } from './add-user/add-user.component';

import { CrudComponent } from './crud.component';
import { ModificateUserComponent } from './modificate-user/modificate-user.component';
import { CrudService } from '../../servicios/crud.service';
import { LoginService } from '../../servicios/login.service';
import { Client } from '../../modelo/client';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;

  let loginServiceStub: LoginService;
  let crudServiceStub: CrudService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        CrudComponent,
        LoginService,
        CrudService
      ]
    });
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
