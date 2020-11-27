import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Vrp2FormComponent} from './vrp2-form.component';

describe('Vrp2FormComponent', () => {
  let component: Vrp2FormComponent;
  let fixture: ComponentFixture<Vrp2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vrp2FormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vrp2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
