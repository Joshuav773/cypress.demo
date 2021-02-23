/// <reference types="cypress" />

describe('Test all Document Generation', () => {

	beforeEach('Pulling site and login in', () => {
		cy.visit('http://bhgdev/bpp/login')
		cy.get('[formcontrolname^=username]').type("bppPAdmin")
		cy.get('[formcontrolname^=password]').type("9gwBOfK0hLj4")
		cy.get('span').contains(' SIGN IN ').click();
	})

	it('Should test generate NDA', () => {
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

		cy.get('#ellipse').click()
		cy.get('#generateNda > span').click()

		var curday = function(sp){
			today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //As January is 0.
			var yyyy = today.getFullYear();
			
			if(dd<10) dd='0'+dd;
			if(mm<10) mm='0'+mm;
			return (mm+sp+dd+sp+yyyy);
			};

			var today = curday('/');
			cy.log(today);

			cy.get('bpp-nda > .mat-card > .mat-card-content').within(() => {
				cy.get('tbody')
					.children()
					.contains(today)
					
					
			})

			cy.get('bpp-nda > .mat-card > .mat-card-content').within(() => {
				cy.get('tbody')
					.children()
					.contains('BHG Mutual Non Disclosure Agreement')
					
			})
			cy.get('.ng-star-inserted > #ellipse > .mat-button-wrapper > .mat-icon').click();

			cy.get('.mat-menu-content')
			  .children()
			  .contains('BHG Mutual Non Disclosure Agreement_B0408.pdf' && 'BHG Mutual Non Disclosure Agreement_B0408.rtf')
					
			cy.get('.ng-dirty > .td-data-table-scrollable > .td-data-table > .td-data-table-body > .td-data-table-row > .mat-checkbox-cell > .td-data-table-cell-content-wrapper > .mat-pseudo-checkbox').click({force:true})
			
			cy.get('#removeNda').click({force:true})

			cy.get('.mat-dialog-actions > .mat-primary > .mat-button-wrapper').click()

			cy.get('.toast-message')
			  .should('be.visible')
			  .contains('Successfully removed NDA/CSR')





	})





})