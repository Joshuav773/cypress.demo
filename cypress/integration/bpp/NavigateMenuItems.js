/// <reference types="cypress" />

describe('BPP Regression', () => {


	beforeEach(() =>{
		cy.visit('http://bhgdev/bpp/login')
		cy.login('DevTesting', 'Bankers20')
	})

	it('should navigate across all menu items', () => {
		//Check the Orders page loads
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Orders').click()
		cy.location('pathname').should('include', 'queues/orders')
		//Check the Offers pages loads
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Offers').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('All Offers').click()
		
		cy.location('pathname').should('include', 'queues/offers')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Offers').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Open Offers').click()
		cy.location('pathname').should('include', 'queues/offers/open')
		
		//Check the Ready to Offer pages loads
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Ready to Offer').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('BHG ProFunding').click()
		cy.location('pathname').should('include', 'queues/pro-funding')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Ready to Offer').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Commercial').click()
		cy.location('pathname').should('include', 'queues/core')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Ready to Offer').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Consumer').click()
		cy.location('pathname').should('include', 'queues/consumer')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Ready to Offer').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('FundEx').click()
		cy.location('pathname').should('include', 'queues/fundex')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Ready to Offer').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('MedDirect').click()
		cy.location('pathname').should('include', 'queues/meddirect')
		
		//Check the Bank Rep Inventory pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Bank Rep Inventory').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Brett Pugh').click()
		cy.location('pathname').should('include', 'queues/bankrep/')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Bank Rep Inventory').click()
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('bpp PBankRepAssistant').click()
		//cy.location('pathname').should('include', 'queues/bankrep/114')
		
		//Check the Auction pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Auction').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Live Tools').click()
		cy.location('pathname').should('include', 'queues/auction/pending')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Auction').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Standard').click()
		cy.location('pathname').should('include', 'queues/auction/standard')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Auction').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Silent').click()
		cy.location('pathname').should('include', 'queues/auction/silent')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Auction').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Marketplace').click()
		cy.location('pathname').should('include', 'queues/auction/marketplace')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Auction').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Outstanding').click()
		cy.location('pathname').should('include', 'queues/auction/unsold')

		//Check the Wire Transfer pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Wire Transfer').click()
		cy.location('pathname').should('include', 'queues/wire-transfer')

		//Check the Funding Partners pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Funding Partners').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Ready for Funding').click()
		cy.location('pathname').should('include', 'funding-partners/ready-for-funding/Pinnacle')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Funding Partners').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Ready for Buyback').click()
		cy.location('pathname').should('include', 'funding-partners/ready-for-buyback/Pinnacle')

		//Check the Silver pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Silver').click()
		cy.location('pathname').should('include', 'queues/silver')

		//Check the Placed pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Placed').click()
		cy.location('pathname').should('include', 'queues/placed')

		//Check the SPV pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('SPV').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Pending').click()
		cy.location('pathname').should('include', 'queues/spv/pending')
		//cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('SPV').click()
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Complete').click()
		cy.location('pathname').should('include', 'queues/spv/completed')

		//Check the On Hold pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('On Hold').click()
		cy.location('pathname').should('include', 'queues/on-hold')

		//Check the In House pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('In House').click()
		cy.location('pathname').should('include', 'queues/in-house')
		
		//Check the Bank Rep Referrals pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Bank Rep Referrals').click()
		cy.location('pathname').should('include', 'queues/bankrep-referrals')

		//Check the Auction Tools pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Auction Tools').click()
		cy.location('pathname').should('include', 'admin')

		//Check the Admin Tools pages load
		cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Admin Tools').click()
		cy.location('pathname').should('include', 'admin/tools')
	})
})