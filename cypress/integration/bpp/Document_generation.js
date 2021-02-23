/// <reference types="cypress" />

describe('Should generate bank agreeements', () => {

	beforeEach('Pulling site and login in', () => {
		cy.visit('http://bhgdev/bpp/login')
		cy.login('bppPAdmin', '9gwBOfK0hLj4')
	})
	it('Standard Agreeement', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Frontier Bank {enter}')
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Frontier Bank')
		}).click()
		cy.get('.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label>.mat-tab-label-content').contains('Agreements').click()
		cy.get('#addAgreement').click()
		cy.get('.cdk-overlay-pane').within(() => {
			cy.get('.mat-select-placeholder').contains('Agreement Type').click()
		})
		cy.get('[id="cdk-overlay-1"]').contains('Standard').click()
		cy.get('[id="generateAgreement"]').click()
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Standard')
				.parentsUntil('tbody').within(() => {
					cy.get('.mat-pseudo-checkbox').click();
				})
		})

		cy.get('#removeAgreement').click()
		cy.get('.mat-dialog-actions > .mat-primary').click()
		cy.get('.toast').contains('Successfully').should('be.visible')
	})

	it('FundEx Agreeement', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Frontier Bank {enter}')
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Frontier Bank')
		}).click()
		cy.get('.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label>.mat-tab-label-content').contains('Agreements').click()
		cy.get('#addAgreement').click()
		cy.get('.cdk-overlay-pane').within(() => {
			cy.get('.mat-select-placeholder').contains('Agreement Type').click()
		})
		cy.get('[id="cdk-overlay-1"]').contains('FundEx').click()

		cy.get('[placeholder="Purchase Maximum"]').type('500000')


		cy.get('[id="generateAgreement"]').click()
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('FundEx')
				.parentsUntil('tbody').within(() => {
					cy.get('.mat-pseudo-checkbox').click();
				})
		})

		cy.get('#removeAgreement').click()
		cy.get('.mat-dialog-actions > .mat-primary').click()
		cy.get('.toast').contains('Successfully').should('be.visible')
	})


	it('Jv Agreeement', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Frontier Bank {enter}')
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Frontier Bank')
		}).click()
		cy.get('.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label>.mat-tab-label-content').contains('Agreements').click()
		cy.get('#addAgreement').click()
		cy.get('.cdk-overlay-pane').within(() => {
			cy.get('.mat-select-placeholder').contains('Agreement Type').click()
		})
		cy.get('[id="cdk-overlay-1"]').contains('Jv').click()

		cy.get('[placeholder="Purchase Maximum"]').type('500000')


		cy.get('[id="generateAgreement"]').click()
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Jv')
				.parentsUntil('tbody').within(() => {
					cy.get('.mat-pseudo-checkbox').click();
				})
		})

		cy.get('#removeAgreement').click()
		cy.get('.mat-dialog-actions > .mat-primary').click()
		cy.get('.toast').contains('Successfully').should('be.visible')
	})

	it.only('Jv FundEx Agreeement', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Frontier Bank {enter}')
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Frontier Bank')
		}).click()
		cy.get('.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label>.mat-tab-label-content').contains('Agreements').click()
		cy.get('#addAgreement').click()
		cy.get('.cdk-overlay-pane').within(() => {
			cy.get('.mat-select-placeholder').contains('Agreement Type').click()
		})
		cy.get('[id="cdk-overlay-1"]').contains('Jv FundEx').click()

		cy.get('[placeholder="Purchase Maximum"]').type('500000')


		cy.get('[id="generateAgreement"]').click()
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Jv FundEx')
				.parentsUntil('tbody').within(() => {
					cy.get('.mat-pseudo-checkbox').click();
				})
		})

		cy.get('#removeAgreement').click()
		cy.get('.mat-dialog-actions > .mat-primary').click()
		cy.get('.toast').contains('Successfully').should('be.visible')
	})


	it('Commercial Agreeement', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Frontier Bank {enter}')
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Frontier Bank')
		}).click()
		cy.get('.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label>.mat-tab-label-content').contains('Agreements').click()
		cy.get('#addAgreement').click()
		cy.get('.cdk-overlay-pane').within(() => {
			cy.get('.mat-select-placeholder').contains('Agreement Type').click()
		})
		cy.get('[id="cdk-overlay-1"]').contains('Commercial').click()
		cy.get('[id="generateAgreement"]').click()
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Commercial')
				.parentsUntil('tbody').within(() => {
					cy.get('.mat-pseudo-checkbox').click();
				})
		})

		cy.get('#removeAgreement').click()
		cy.get('.mat-dialog-actions > .mat-primary').click()
		cy.get('.toast').contains('Successfully')
	})

	it('PV Participation Agreeement', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Frontier Bank {enter}')
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Frontier Bank')
		}).click()
		cy.get('.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label>.mat-tab-label-content').contains('Agreements').click()
		cy.get('#addAgreement').click()
		cy.get('.cdk-overlay-pane').within(() => {
			cy.get('.mat-select-placeholder').contains('Agreement Type').click()
		})
		cy.get('[id="cdk-overlay-1"]').contains('PV Participation').click()
		cy.get('[id="generateAgreement"]').click()
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('PV Participation')
				.parentsUntil('tbody').within(() => {
					cy.get('.mat-pseudo-checkbox').click();
				})
		})

		cy.get('#removeAgreement').click()
		cy.get('.mat-dialog-actions > .mat-primary').click()
		cy.get('.toast').contains('Successfully')
	})

	it('Standard - Shallsub Agreeement', () => {
		cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click();
		cy.get('.mat-form-field-autofill-control').type('Frontier Bank {enter}')
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Frontier Bank')
		}).click()
		cy.get('.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label>.mat-tab-label-content').contains('Agreements').click()
		cy.get('#addAgreement').click()
		cy.get('.cdk-overlay-pane').within(() => {
			cy.get('.mat-select-placeholder').contains('Agreement Type').click()
		})
		cy.get('.mat-select-panel').scrollTo('bottom')
		cy.get('.mat-select-panel-wrap').contains('Standard - ShallSub').click()
		cy.get('[id="generateAgreement"]').click()
		cy.wait(3000)
		cy.get('tbody').within(() => {
			cy.get('tr')
				.children()
				.contains('Standard - ShallSub')
				.parentsUntil('tbody').within(() => {
					cy.get('.mat-pseudo-checkbox').click();
				})
		})

		cy.get('#removeAgreement').click()
		cy.get('.mat-dialog-actions > .mat-primary').click()
		cy.get('.toast').contains('Successfully')
	})

})