import { IRecordSet } from 'mssql';
import { CommonAPI } from '../../page-objects/common';

context('Substitution Offers', () => {

    beforeEach(() => {
        new CommonAPI().init();
        cy.login('bppPAdmin', '9gwBOfK0hLj4')
    });

    describe('CRUD', () => {
        it('user can substitude a loan', async () => {
            let bank: any = {};

            //pre-condition
            //get Candidate for the act
            cy.task<IRecordSet<any>>('queryRaw', 
                `Select * 
                From Placements.dbo.[Order] 
                where OrderType = 'subs'`
            )
            .then(ret => {
                let CustomerId = ret[0].CustomerId;
                cy.task<IRecordSet<any>>('queryRaw', 
                    `Select * 
                    From Placements.dbo.Customer 
                    Where CustomerId = '${ CustomerId }'`
                )
                .then(result => { bank = result[0]; });
            });
 
            //ACT: Create Offer In Bank
            cy.url().then(url => {
                if(!url.toLowerCase().includes('customers')) {
                    cy.get('.ng-tns-c13-18.ng-tns-c8-3 > .mat-ripple').click();
                }
            });

            cy.get('.td-search-icon > .mat-button-wrapper > .mat-icon').click().get('#mat-input-2').type(bank.customerId);
            cy.get('a').contains(bank.customerId).click();
            cy.get('#mat-tab-label-0-2').click();
            cy.xpath("(//table/tbody/tr[td[div[contains(text(), 'Substitution')]]]/td/div/mat-pseudo-checkbox)[1]").click();
            cy.get('#addContact > .mat-button-wrapper > .icon').click();
           
            //TODO: Keep track of Workflow for loan Selection, also offer number and bankRep for assignment
        });
    });
});