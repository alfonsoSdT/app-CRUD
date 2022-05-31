import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { last } from 'rxjs';

import { CrudService } from './crud.service';
import { LoginService } from './login.service';

describe('CrudService', () => {
  let service: CrudService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(CrudService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('add user', () => {
    it('should be equal', () => {
      let dat =[
        {
          id: 1,
          name: "Test1",
          firstName: "Alberto",
          lastName: "Fernandez",
          age: 23,
          salary: 123123        
      },
      {
        id: 2,
        name: "Test2",
        firstName: "Pepe",
        lastName: "Gonzalez",
        age: 23,
        salary: 123123        
      },
      {
        id: 3,
        name: "Test3",
        firstName: "Jose",
        lastName: "Martinez",
        age: 23,
        salary: 123123        
    }];
    service.data = dat;
    let clieNew = {
      id: 4,
      name: "Test4",
      firstName: "Jose",
      lastName: "Martinez",
      age: 23,
      salary: 123123        
    };
    service.addUser(clieNew);
    expect(service.data[3]).toBe(clieNew);
    })
  });
  describe('delete user', () => {
    it('should be equal', () => {
      let dat =[
        {
          id: 1,
          name: "Test1",
          firstName: "Alberto",
          lastName: "Fernandez",
          age: 23,
          salary: 123123        
      },
      {
        id: 2,
        name: "Test2",
        firstName: "Pepe",
        lastName: "Gonzalez",
        age: 23,
        salary: 123123        
      },
      {
        id: 3,
        name: "Test3",
        firstName: "Jose",
        lastName: "Martinez",
        age: 23,
        salary: 123123        
    },
    {
      id: 4,
      name: "Test4",
      firstName: "Jose",
      lastName: "Martinez",
      age: 23,
      salary: 123123        
    }];
    service.data = dat;
    service.deleteUser(4);
    expect(service.data[3]).toBe(undefined);
    })
  });
  describe('modificate user', () => {
    it('should be equal', () => {
      let dat =[
        {
          id: 1,
          name: "Test1",
          firstName: "Alberto",
          lastName: "Fernandez",
          age: 23,
          salary: 123123        
      },
      {
        id: 2,
        name: "Test2",
        firstName: "Pepe",
        lastName: "Gonzalez",
        age: 23,
        salary: 123123        
      },
      {
        id: 3,
        name: "Test3",
        firstName: "Jose",
        lastName: "Martinez",
        age: 23,
        salary: 123123        
    },
    {
      id: 4,
      name: "Test4",
      firstName: "Jose",
      lastName: "Martinez",
      age: 23,
      salary: 123123        
    }];
    service.data = dat;

    let clientEdited = {
      id: 4,
      name: "Test4Edit",
      firstName: "Jose1",
      lastName: "Martinez1",
      age: 24,
      salary: 123124        
    };
    service.editUser(clientEdited);
    expect(service.data[3]).toBe(clientEdited);
    })
  });

  describe('get last id', () => {
    it('should be equal', () => {
      let dat =[
        {
          id: 1,
          name: "Test1",
          firstName: "Alberto",
          lastName: "Fernandez",
          age: 23,
          salary: 123123        
      },
      {
        id: 2,
        name: "Test2",
        firstName: "Pepe",
        lastName: "Gonzalez",
        age: 23,
        salary: 123123        
      },
      {
        id: 3,
        name: "Test3",
        firstName: "Jose",
        lastName: "Martinez",
        age: 23,
        salary: 123123        
    }];
    service.data = dat;
    let lastId = service.getLastID();
    expect(lastId).toBe(3);
    })
  });

  describe('get user', () => {
    it('should be equal', () => {
      let dat =[
        {
          id: 1,
          name: "Test1",
          firstName: "Alberto",
          lastName: "Fernandez",
          age: 23,
          salary: 123123        
      },
      {
        id: 2,
        name: "Test2",
        firstName: "Pepe",
        lastName: "Gonzalez",
        age: 23,
        salary: 123123        
      },
      {
        id: 3,
        name: "Test3",
        firstName: "Jose",
        lastName: "Martinez",
        age: 23,
        salary: 123123        
    }];
    service.data = dat;
    let clientGetted = JSON.parse(service.getUser(3));
    const client3 = {id: 3, name: "Test3", firstName: "Jose", lastName: "Martinez", age: 23,salary: 123123};
    
    expect(clientGetted).toStrictEqual(client3);
    })
  });

});
