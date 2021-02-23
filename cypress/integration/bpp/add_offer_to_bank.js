/// <reference types="cypress" />

describe('Test add offer to bank', () => {

	beforeEach('Pulling site and login in', () => {
		cy.visit('http://bhgdev/bpp/login');
		cy.login('bppPAdmin', '9gwBOfK0hLj4')
	})

	it(`Should test add offer to bank`, () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('B0408{enter}')
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains(`County Bank`)
				.should('be.visible')

		cy.get('.cdk-column-CustomerId > a')
		  .contains('B0408')
		  .click()
		})

		cy.get('.main-container').within(() => {	
			cy.get('.mat-tab-labels')		
				.children()
				.contains(`Orders`)
				.should('be.visible')
				.click()
				cy.log(Cypress.spec.name)
		  
		})
		


	})





})