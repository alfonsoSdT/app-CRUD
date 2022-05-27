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
    fixture = TestBed.createComponent(ModificateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
