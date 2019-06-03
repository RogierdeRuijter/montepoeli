import {UnknownCaseException} from './UnknownCaseException';

export class IllegalInputException extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, UnknownCaseException.prototype);
  }

}
