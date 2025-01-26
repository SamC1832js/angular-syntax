/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModService } from './mod.service';

describe('Service: Mod', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModService]
    });
  });

  it('should ...', inject([ModService], (service: ModService) => {
    expect(service).toBeTruthy();
  }));
});
