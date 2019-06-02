export class UnknownCaseException extends Error {
  // TODO: set prototype explicitly for type checking
  constructor(message: string) {
    super(message);
  }
}
