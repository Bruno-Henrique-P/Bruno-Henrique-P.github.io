import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsCreateComponent } from './os-create.component';

describe('OsCreateComponent', () => {
  let component: OsCreateComponent;
  let fixture: ComponentFixture<OsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsCreateComponent]
    });
    fixture = TestBed.createComponent(OsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
