/// <reference types="cypress" />

describe('Test API', () => {
    
    it('should return status 200', () => {
        cy.request('https://webservicesdev/BHG.FundingPartners.WS/DocumentVault/252').its('status').should('be.equal', 200)
    })

    it('should return status 200', () => {
        cy.request('https://webservicesdev/BHG.FundingPartners.WS/DocumentVault/252').then(response => {
            var results = response.body
        })
    })

    it('should test documentVault', () => {
        cy.request('https://webservicesdev/BHG.FundingPartners.WS/DocumentVault/120920').then(response => {
            var results = response.body
        })
    })
})