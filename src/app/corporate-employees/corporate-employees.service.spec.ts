import { TestBed, inject } from '@angular/core/testing';

import { CorporateEmployeesService } from './corporate-employees.service';

describe('CorporateEmployeesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorporateEmployeesService]
    });
  });

  it('should be created', inject([CorporateEmployeesService], (service: CorporateEmployeesService) => {
    expect(service).toBeTruthy();
  }));
});
