describe('Generate a block offer', () => {

	beforeEach('Pulling site and login in', () => {
		cy.visit('http://bhgdev/bpp/login')
		cy.login('bppPAdmin', '9gwBOfK0hLj4')
	})
	it('Should create a block offer', () => {
		cy.waitUntil(() => cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Ready to Offer').click())
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('BHG ProFunding').click()
		cy.waitUntil(() => cy.get('tbody').within(() => {
			cy.waitUntil(() => cy.get('tr')
				.children()
				.get('td').contains('.ng-star-inserted', 'Yes').first().parentsUntil('tbody').within(() => {
					cy.get('mat-pseudo-checkbox').click({ force: true })
				}))
		}))
		cy.get('#blockOffer').click()
		cy.get('mat-dialog-container').within(() => {
			cy.get('[formcontrolname="customerName"]').type('Dime Bank')
		})
		cy.waitUntil(() => cy.get('.mat-autocomplete-panel > .mat-option > .mat-option-text').contains('Dime Bank').click())
		cy.get('mat-dialog-container').within(() => {
			cy.waitUntil(() => cy.get('.mat-select-placeholder').contains('Order Number').trigger('click'))
		})
		cy.waitUntil(() => cy.get('.mat-option-text').first().click())
		cy.get('mat-dialog-container').within(() => {
			cy.waitUntil(() => cy.get('.mat-select-placeholder').contains('Existing').trigger('click'))
		})
		cy.get('.mat-option-text').eq('2').click();
		cy.get('mat-dialog-container').within(() => {
			cy.waitUntil(() => cy.get('.mat-button').click())
		})
	})
})