import { describe, expect, it } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('Class HttpError', () => {
  it('should contain the provided status code, message and data', () => {
    const testData = {
      key: 'test',
    };
    const testStatus = 1;
    const testMessage = 'Test';

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.data).toBe(testData);
    expect(testError.message).toBe(testMessage);
    expect(testError.statusCode).toBe(testStatus);
  });

  it('should contain undefined as data if no data is provided', () => {
    const testStatus = 1;
    const testMessage = 'Test';

    const testError = new HttpError(testStatus, testMessage);

    // or .not.toBeDefined()
    expect(testError.data).toBeUndefined();
    expect(testError.message).toBe(testMessage);
    expect(testError.statusCode).toBe(testStatus);
  });
});

describe('Class ValidationError', () => {
  it('should contain the provided message', () => {
    const textMessage = 'test';

    const testError = new ValidationError(textMessage);

    expect(testError.message).toBe(textMessage)
  });
});
