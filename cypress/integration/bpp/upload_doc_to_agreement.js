/// <reference types="cypress" />

describe('Tests Upload Document to Agreement', () => {

	beforeEach('Pulling site and login in', () => {
		cy.visit('http://bhgdev/bpp/login')
		cy.get('[formcontrolname^=username]').type("bppPAdmin")
		cy.get('[formcontrolname^=password]').type("9gwBOfK0hLj4")
		cy.get('span').contains(' SIGN IN ').click();
	})

	it('Should Upload a sample.odf to Agreement and then delete it', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('B0408{enter}')
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('County Bank')
				.should('be.visible')

			cy.get('.cdk-column-CustomerId > a')
				.contains('B0408')
				.click()


		})
		cy.get('#mat-tab-label-0-1 > .mat-tab-label-content')
			.contains('Agreements')
			.should('be.visible')
			.click()
		cy.get(':nth-child(5) > .mat-checkbox-cell > .td-data-table-cell-content-wrapper > .mat-pseudo-checkbox').click({})
		cy.get('#upload_agreement > .mat-button-wrapper > .mat-icon').click()

		const fileName = 'Sample.pdf';
		cy.fixture(fileName).then(fileContent => {
			cy.get('.file_dropZone_internal').attachFile(fileName, { subjectType: 'drag-n-drop' });

			cy.get(':nth-child(2) > .file-droppa-btn > span').click()

			cy.get('.toast-message')
				.should('be.visible')
				.should('contain', 'Successfully saved data')

			cy.get('#ellipse > .mat-button-wrapper > .mat-icon').click()
			cy.get('.mat-menu-item > span').contains('Sample.pdf')
			cy.get('.remove-file-icon').click()
			cy.get('.mat-dialog-actions > .mat-primary').click()

			cy.get('.toast-message')
				.should('be.visible')
				.should('contain', 'Successfully removed selected file')

		});
	})


})