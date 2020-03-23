export class ShouldBeDefinedException extends Error {
  constructor(message: string) {
    super('the following property should be defined: ' + message);

    Object.setPrototypeOf(this, ShouldBeDefinedException.prototype);
  }

}
