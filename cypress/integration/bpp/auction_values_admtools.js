describe('Update auction values via admin auction tools', () => {

	beforeEach('Pulling site and login in', () => {
		cy.visit('http://bhgdev/bpp/login')
		cy.login('bppPAdmin', '9gwBOfK0hLj4')
	})

	it('Check auction type Standard', () => {
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Auction Tools').click()
		cy.location('pathname').should('include', 'admin')
		cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper').click()
		cy.get('.cdk-overlay-container').within(() => {
			cy.waitUntil(() => cy.get('.mat-option-text').contains('Standard').click())
		})
		cy.get('mat-tab-body').within(() => {
			cy.waitUntil(() => cy.get('.td-data-table-body').should('be.visible'))
		})
	})

	it('Check auction type Marketplace', () => {
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Auction Tools').click()
		cy.location('pathname').should('include', 'admin')
		cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper').click()
		cy.get('.cdk-overlay-container').within(() => {
			cy.waitUntil(() => cy.get('.mat-option-text').contains('Marketplace').click())
		})
		cy.get('mat-tab-body').within(() => {
			cy.waitUntil(() => cy.get('.td-data-table-body').should('be.visible'))
		})
	})

	it('Check auction type Silent', () => {
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Auction Tools').click()
		cy.location('pathname').should('include', 'admin')
		cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper').click()
		cy.get('.cdk-overlay-container').within(() => {
			cy.waitUntil(() => cy.get('.mat-option-text').contains('Silent').click())
		})
		cy.get('mat-tab-body').within(() => {
			cy.waitUntil(() => cy.get('.td-data-table-body').should('be.visible'))
		})
	})
})