import { describe, expect, it } from 'vitest';

import { validateNotEmpty } from './validation';

describe('validateNotEmpty()', () => {
  it('should throw an error if an empty string is provided', () => {
    const testInput = '';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
  });

  it('should throw an error if an empty string is provided', () => {
    const testInput = '  ';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
  });

  it('should throw an error with the provided error message', () => {
    const testInput = '  ';
    const testMessage = 'test'

    const validationFn = () => validateNotEmpty(testInput, testMessage);

    expect(validationFn).toThrow(testMessage);
  });
});
