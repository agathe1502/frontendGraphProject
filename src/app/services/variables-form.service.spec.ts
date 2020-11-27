import {TestBed} from '@angular/core/testing';

import {VariablesFormService} from './variables-form.service';

describe('VariablesFormService', () => {
  let service: VariablesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
