import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';



describe('LoginService', () => {
  let service: LoginService;  
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(LoginService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });  
  describe('check user', () => {
    it('should return true', () => {
      let dat = [ 
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
      service.data = dat;
      let name = 'Alfonso';
      let psw = '123456789'; 
      const ret = service.checkUser(name,psw);
      expect(ret).toBeTruthy;
    });

    it('should return false', () => {
      let dat = [
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
        }];
      service.data = dat;
      let name = 'Alfonso';
      let psw = 'Alfonso'; 
      const ret = service.checkUser(name,psw);
      expect(ret).toBeFalsy;
    })
  })
  describe('add user', () => {
    it('should return true', () => {
      service.session = false;
      let name = 'Alfonso';
      service.addUser(name);
      let nameLoc = localStorage.getItem('usuario_iniciado:');
      expect(service.session).toBeTruthy;
    });
  })

  describe('close session', () => {
    it('should return false', () => {
      service.session = true;
      service.closeSession();
      expect(service.session).toBeFalsy;
    });
  });

  describe('get user logged', () => {
    it('should the name', () => {
      localStorage.setItem('usuario_iniciado:', 'Alfonso');
      let name = service.getUserLog();
      expect(name).toBe('Alfonso');
    });
  })
});

