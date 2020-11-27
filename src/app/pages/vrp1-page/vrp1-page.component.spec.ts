import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Vrp1PageComponent} from './vrp1-page.component';

describe('Vrp1PageComponent', () => {
  let component: Vrp1PageComponent;
  let fixture: ComponentFixture<Vrp1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vrp1PageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vrp1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
