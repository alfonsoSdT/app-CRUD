import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from '../../login/login.component';

import { ModificateUserComponent } from './modificate-user.component';

describe('ModificateUserComponent', () => {
  let component: ModificateUserComponent;
  let fixture: ComponentFixture<ModificateUserComponent>;

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule 
      ]
    });
    component = TestBed.inject(ModificateUserComponent);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
