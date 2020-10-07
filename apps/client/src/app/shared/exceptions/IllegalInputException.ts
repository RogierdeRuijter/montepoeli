export class IllegalInputException extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, IllegalInputException.prototype);
  }
}
