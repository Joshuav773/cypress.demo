/// <reference types="cypress" />
describe('Adding & deleting institutions', () => {

	beforeEach('Pulling site and login in',() => {
		cy.visit('http://bhgdev/bpp/login')
		cy.login('bppPAdmin', '9gwBOfK0hLj4')
	})
	
	it('should add a new bank', () => {
		cy.get('[id^=add]').click();
		cy.get('[formcontrolname=name]').type("Test Bank 2.0 Cypress")
		cy.get('[formcontrolname="FdicNumber"]').type("11111")
		cy.get('[formcontrolname="address1"]').type("1234 test st")
		cy.get('[formcontrolname="city"]').type("testcity")
		cy.get('[formcontrolname="zipcode"]').type("12345")
		cy.get('.mat-form-field-infix').contains('States').click();
		cy.get('span').contains(' CALIFORNIA ').click();
		cy.get('#saveBank').click()
		cy.wait(3000)
	})

	it('should add Contact to new bank', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Test Bank 2.0 Cypress {enter}')

		cy.waitUntil(() => cy.get('tr').contains('Test Bank 2.0 Cypress').click())
		cy.get('[id="addContact"]').click();
		cy.get('#mat-dialog-0').within(() => {
			cy.get('#fname').type('testcontact')
			cy.get('#lname').type('LastName')
			cy.get('#email').type('hsjghskjhg@hfdkjfkjsf.com')
			cy.get('mat-select').contains('Type').click()
			cy.wait(3000)
		})
		cy.get('[id="cdk-overlay-1"]').contains('Docusign').click();
		cy.get('#mat-dialog-0').within(() => {
			cy.get('#addContact').click();
		})
		cy.get('.toast').contains('Successfully')
	})

	it('should delete added contact', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Test Bank 2.0 Cypress {enter}')
		cy.waitUntil(() => cy.get('tr').contains('Test Bank 2.0 Cypress').click())
		// goes into the contact div on the page. 
		cy.get('bpp-customer-contacts > .mat-card > .mat-card-content').within(() => {
			cy.get('tr')
				.children()
				//checks that the children of this box contain a contact with name testcontact
				.contains('testcontact')
				//because immediate parent is associated with the column for name, did until to find the closest tbody of the section. 
				.parentsUntil('tbody')
				// within this specified box selected the checkbox. 
					.within(() => {
						cy.get('.mat-pseudo-checkbox').click();
					})
			cy.get('#deleteContact').click();
		})
		cy.get('[id="cdk-overlay-0"]').contains('Confirm Delete')
		cy.get('.mat-dialog-actions > .mat-primary').click();
		cy.get('.toast').contains('Successfully')
	})

	it('should add a BHG Representatives', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Test Bank 2.0 Cypress {enter}')
		cy.waitUntil(() => cy.get('tr').contains('Test Bank 2.0 Cypress').click())
		cy.get('#addRepresentative > .mat-button-wrapper > .icon').click();
		cy.get('.mat-card-content > :nth-child(1) > .mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').contains('Role').click();
		cy.waitUntil(() => cy.get('[role="option"]').contains('President').click())
		cy.get('[placeholder="Representative"]').click()
		cy.get('[role="option"]').contains('Juan Carlos Ortigosa').click();
		//goes into date picker box.
		cy.get('[role="dialog"]').within(() => {
			cy.get('[class="mat-datepicker-toggle"]').click();
		})
		//select the ACTIVE date (today)
		cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
		// Then selects the add option within box 
		cy.get('[role="dialog"]').within(() => {
			cy.get('.mat-dialog-actions > #addRepresentative').click();
		})
		cy.get('.toast').contains('Successfully')
	})

	it('should remove the added BHG Representatives', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Test Bank 2.0 Cypress {enter}')
		cy.waitUntil(() => cy.get('tr').contains('Test Bank 2.0 Cypress').click())
		cy.get('#representativesTable > .td-data-table-scrollable > .td-data-table > .td-data-table-body > .td-data-table-row > .mat-checkbox-cell > .td-data-table-cell-content-wrapper > .mat-pseudo-checkbox').click();
		cy.get('#deleteRepresentative').click();
		cy.get('[role="dialog"]').within(() => {
			cy.get('[class="mat-datepicker-toggle"]').click();
		})
		//select the ACTIVE date (today)
		cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
		cy.get('[placeholder="Note"]').click()
		cy.get('[formcontrolname="notes"]').type('this is a test')
		cy.get('.mat-dialog-actions > #addRepresentative').click(); 
		cy.get('.toast').contains('Successfully')
		// need to finalize assertion that table is empty post deletion. 
		cy.get('bpp-customer-representative').should('be.empty')
		//cy.get('#representativesTable > td-data-table-row ').should('be.empty')
	})

	it('should delete the created bank', () => {
	cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Test Bank 2.0 Cypress {enter}')
		cy.waitUntil(() => cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Test Bank 2.0 Cypress')
				.parent()
				.within(() => {
					cy.get('.mat-checkbox-inner-container').click()
				})
		}))
		cy.get('#remove > .mat-button-wrapper > span').click();
		cy.get('#mat-dialog-0').contains('Confirm Delete')
		cy.get('.mat-dialog-actions > .mat-primary').click();
		cy.get('.toast').contains('Successfully')
	})
	
})