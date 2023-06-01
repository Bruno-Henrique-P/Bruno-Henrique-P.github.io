import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsEncerradasComponent } from './os-encerradas.component';

describe('OsEncerradasComponent', () => {
  let component: OsEncerradasComponent;
  let fixture: ComponentFixture<OsEncerradasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsEncerradasComponent]
    });
    fixture = TestBed.createComponent(OsEncerradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
