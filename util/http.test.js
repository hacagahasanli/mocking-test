import { describe, expect, it, vi } from 'vitest';

import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testData' };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testReponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testReponse);
  });
});

vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest()', () => {
  it('should return any available response data', () => {
    const testData = { key: 'test' };

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });
});
