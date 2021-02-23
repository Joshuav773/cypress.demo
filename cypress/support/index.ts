import './commands';
import 'cypress-xpath';
import 'cypress-wait-until';

const titleToFileName = (title) => title.replace(/[:\/]/g, '');

Cypress.on('test:after:run', (test, runnable) => {
  let addContext = require('mochawesome/addContext')
  if (test.state === 'failed') {
    const filename = `${titleToFileName(runnable.parent.title)} -- ${titleToFileName(test.title)} (failed).png`;
    addContext({ test }, `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${filename}`);
  }
});

Cypress.on('test:after:run', (test, runnable) => {
  let addContext = require('mochawesome/addContext');
  const videos = `${Cypress.config('videosFolder')}/${Cypress.spec.name}.mp4`;
  addContext({ test }, videos);
});

beforeEach('Pulling site and login in', () => {
  cy.visit('http://bhgdev/bpp/login');
  cy.login('bppPAdmin', '9gwBOfK0hLj4')
});