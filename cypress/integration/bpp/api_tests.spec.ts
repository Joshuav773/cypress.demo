import { CommonAPI } from '../../page-objects/common';
import { OffersPage } from '../../page-objects/pages/offerspage';

describe('Test API', () => {
    beforeEach(() => {
        CommonAPI.prototype.init();
        cy.login('DevTesting', 'Bankers20');
    });

    it('should return status 200', () => {
        OffersPage.prototype.addLoan();
    })

    // it('should return status 200', () => {
    //     cy.request('https://webservicesdev/BHG.FundingPartners.WS/DocumentVault/252').then(response => {
    //         var results = response.body
    //     })
    // })

    // it('should test documentVault', () => {
    //     cy.request('https://webservicesdev/BHG.FundingPartners.WS/DocumentVault/120920').then(response => {
    //         var results = response.body
    //     })
    // })
})