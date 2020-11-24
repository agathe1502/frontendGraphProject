import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmChartComponent } from './algorithm-chart.component';

describe('AlgorithmChartComponent', () => {
  let component: AlgorithmChartComponent;
  let fixture: ComponentFixture<AlgorithmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
