import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsAbertasComponent } from './os-abertas.component';

describe('OsAbertasComponent', () => {
  let component: OsAbertasComponent;
  let fixture: ComponentFixture<OsAbertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsAbertasComponent]
    });
    fixture = TestBed.createComponent(OsAbertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
