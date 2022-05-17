import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificateUserComponent } from './modificate-user.component';

describe('ModificateUserComponent', () => {
  let component: ModificateUserComponent;
  let fixture: ComponentFixture<ModificateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificateUserComponent ]
    })
    .compileComponents();
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
