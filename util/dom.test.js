import fs from 'fs';
import path from 'path';

import { Window } from 'happy-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { showError } from './dom';


const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const document = window.document;
vi.stubGlobal('document', document);

const window = new Window();

beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
})

describe('showError()', () => {
  it('should add an error paragraph to the id="errors" element', () => {
    showError('Test');

    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
  });

  it('should not contain an error paragraph initially', () => {
    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).toBeNull();
  })

  it('should output the provided message in the error paragraph', () => {
    const textErrorMessage = 'test'

    showError(textErrorMessage);

    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph.textContent).toBe(textErrorMessage);
  })
});
