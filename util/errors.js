export class HttpError {
  constructor(statusCode, message, data) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export class ValidationError {
  constructor(message) {
    this.message = message;
  }
}