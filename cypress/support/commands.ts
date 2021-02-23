declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(username: string, password: string): Cypress.Chainable<null>;
    }
}
  
Cypress.Commands.add(
    "login",
    (username, password): Cypress.Chainable<null> => {
        cy.get('[formcontrolname="username"]').type(username);
        cy.get('[formcontrolname="password"]').type(password);
        cy.get('.mat-raised-button').click();
        cy.url().should('contain', 'customers');
        return cy.log(`${ username } has logged in\nlogin command finished`);
    }
);


