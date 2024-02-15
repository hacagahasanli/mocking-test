import fs from 'fs';
import path from 'path';

import { Window } from 'happy-dom';
import { expect, it, vi } from 'vitest';

import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();

const document = window.document;
document.write(htmlDocumentContent)
vi.stubGlobal('document', document)

describe('showError()', () => {

})

it('should add an error paragraph to the id="errors" element', () => {
    showError('Test');

    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).not.toBeNull()
});
