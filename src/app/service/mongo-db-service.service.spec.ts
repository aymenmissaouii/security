import { TestBed } from '@angular/core/testing';

import { MongoDbServiceService } from './mongo-db-service.service';

describe('MongoDbServiceService', () => {
  let service: MongoDbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongoDbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
