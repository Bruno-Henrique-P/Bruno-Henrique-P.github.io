import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteReadComponent } from './cliente-read.component';

describe('ClienteReadComponent', () => {
  let component: ClienteReadComponent;
  let fixture: ComponentFixture<ClienteReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteReadComponent]
    });
    fixture = TestBed.createComponent(ClienteReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
