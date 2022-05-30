import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';



describe('LoginService', () => {
  let service: LoginService;  
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  let loginService: LoginService;

const dat = [ 
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
  ]

  
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
      service.data = dat;
      let name = 'Alfonso';
      let psw = '123456789'; 
      const ret = service.checkUser(name,psw);
      expect(ret).toBeTruthy;
    })
  })

});

