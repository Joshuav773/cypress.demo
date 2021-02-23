/// <reference types="cypress" />

describe('Test all search engines across BPP', () => {

	beforeEach('Pulling site and login in', () => {
		cy.visit('http://bhgdev/bpp/login')
		cy.login('bppPAdmin', '9gwBOfK0hLj4')
	})

	it('Should test global search', () => {
		cy.get('.toolbar').within(() => {
			cy.get('.search-input').type('Dime Bank{enter}')
			cy.waitUntil(() => cy.get('.search-dropdown > .content').contains('Dime Bank').click())
		})
		cy.location('pathname').should('include', 'customers/B0005')
	})

	it('Should test search bank list', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Dime Bank{enter}')
		cy.waitUntil(() => cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Dime Bank')
				.should('be.visible')
		}))
	})

	it('should test search in order page', () => {
		cy.waitUntil(() => cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Orders').click())
		cy.waitUntil(() => cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').contains('search').click())
		cy.waitUntil(() => cy.get('.td-search-box').click())
		cy.task('queryRaw', 'Select Top (1) * from Placements.dbo.loan ORDER BY ApplicationCreateDate DESC')
			.then(returnObject => {
				var LoanId = returnObject.recordsets[0][0].Id;
				cy.get('.td-search-box').click().type(LoanId)
				cy.get('.td-data-table-row').within(() => {
					cy.get('.td-data-table-cell-content-wrapper')
						.contains(LoanId)
						.should('be.visible')
				})
			});

	
	})
	it('should test search on RTO queue -- BHG ProFunding', () => {
		cy.waitUntil(() => cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Offers').click())
		cy.waitUntil(() => cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('All Offers').click())
		cy.waitUntil(() => cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').contains('search').click())
		cy.get('.td-search-input-field > .mat-form-field-wrapper').type('3003')  //needs db  call to look for an existing loan. 
		cy.get('.td-data-table-row').within(() => {
			cy.get('.td-data-table-cell-content-wrapper')
				.contains('3003')
				.should('be.visible')
		})
	})

	it.only('should test search on RTO queue -- BHG ProFunding', () => {
		cy.waitUntil(() => cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Ready to Offer').click())
		cy.waitUntil(() =>cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('BHG ProFunding').click())
		cy.waitUntil(() => cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').contains('search').click())
		cy.task('queryRaw', 'Select Top (1) * from Placements.dbo.loan WHERE Workflow = 2 ORDER BY ApplicationCreateDate DESC')
			.then(returnObject => {
				var LoanId = returnObject.recordsets[0][0].Id;
				cy.get('.td-search-input-field > .mat-form-field-wrapper').type(LoanId)
				cy.get('.td-data-table-row').within(() => {
					cy.get('.td-data-table-cell-content-wrapper')
						.contains(LoanId)
						.should('be.visible')
				})
		})
	})
})