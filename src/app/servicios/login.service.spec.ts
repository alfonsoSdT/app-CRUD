import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';


describe('LoginService', () => {
  let service: LoginService;  
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check user', () => {
    const name = 'Alfonso';
    const password = '123456789';
    expect(service.checkUser(name,password)).toBeTruthy();
  });
  it('should not check user', () => {
    const name = 'Pepe';
    const password = '987654321';
    expect(service.checkUser(name,password)).toBeTruthy;
  });
  it('should addUser', () => {
    const name = 'Pepe';
    service.addUser(name);
    expect(service.getUserLog() === null).toBeTruthy;
  });
  it('should close the session', () => {
    const sesionIniciada: boolean = false;
    service.closeSession();
    expect(service.getUserLog() === null).toBeTruthy;
  });
});
