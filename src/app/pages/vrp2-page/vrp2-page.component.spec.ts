import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vrp2PageComponent } from './vrp2-page.component';

describe('Vrp2PageComponent', () => {
  let component: Vrp2PageComponent;
  let fixture: ComponentFixture<Vrp2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vrp2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vrp2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
