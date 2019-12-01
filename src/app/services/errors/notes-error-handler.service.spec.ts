import { TestBed } from '@angular/core/testing';

import { NotesErrorHandlerService } from './notes-error-handler.service';

describe('NotesErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesErrorHandlerService = TestBed.get(NotesErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
