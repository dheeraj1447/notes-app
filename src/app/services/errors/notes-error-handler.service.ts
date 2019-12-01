import {Injectable} from '@angular/core';
import {ErrorHandler} from '@angular/core';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class NotesErrorHandlerService implements ErrorHandler {

  constructor(private logger: NGXLogger) {
  }

  handleError(error: Error): void {
    this.logger.error(error);
  }
}
