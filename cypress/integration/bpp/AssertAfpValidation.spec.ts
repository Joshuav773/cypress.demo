import { CommonAPI } from '../../page-objects/common';

describe('BPP Regression', () => {

	beforeEach(() => {
		CommonAPI.prototype.init();
		cy.login('DevTesting', 'Bankers20')
	});

	['bhg funding', 'commercial', 'consumer', 'meddirect', 'fundex'].forEach((queue) => {
		
		it('should display AFP validation for RTO Queue: ' + queue, () => {
			//Navigate to the Ready to Offer page
			cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Ready to Offer').click()
			
			//Might need a switch statement or an set of if/then to pick the the RTO queue
			switch(queue){
				case 'bhg funding':
					cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('BHG ProFunding').click()
					cy.location('pathname').should('include', 'queues/pro-funding')
					break
					
				case 'commercial':
					cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Commercial').click()
					cy.location('pathname').should('include', 'queues/core')
					break
					
				case 'consumer':
					cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('Consumer').click()
					cy.location('pathname').should('include', 'queues/consumer')
					break
					
				case 'meddirect':
					cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('MedDirect').click()
					cy.location('pathname').should('include', 'queues/meddirect')
					break
					
				default://case 'fundex':
					cy.get('.sidenav-items>.simplebar-scroll-content>.simplebar-content').contains('FundEx').click()
					cy.location('pathname').should('include', 'queues/fundex')
					break		
			}

			//TODO Get invalid loan ID with SQL command
			/*
			
            switch (rtoQueue)
            {
                case "BHG ProFunding":
                    rtoQueue = "ProFunding";
                    break;
                case "Commercial":
                    rtoQueue = "Core";
                    break;
            }
            var procName = @"dbo.GetVision" + rtoQueue + "ClosingList";
            var loanId = DatabaseHelper.ExecuteStoredProc(procName);
            if (loanId == null)
            {
                loanId = SelectRandomValidLoanId();
                //Perform a vision update and force a loan into the AFP=No status
                DatabaseHelper.FreeformSQLQuery("UPDATE vision.sub8900.tapplication8900 " +
                $"SET AvailForPlacement = 0 WHERE ApplicationNum = { loanId }");
                Driver.Instance.Navigate().Refresh();
                WaitForLoadingDiv();
                HelperWaits.PageDoneLoading();
                AssertLoaded();
                TestContext.WriteLine($"Updated vision to set loan: { loanId } AvailForPlacement = 0 ");

            }
            return loanId;
			
			*/

			//Attempt to check box of invalid loan
			cy.wait(1000)
			// span contains 'No'
			cy.get('#bpp-datatable table > tbody > tr').contains('No').get('td mat-pseudo-checkbox').click()

			//Click the Auction button
			cy.get('#auction').click()

			//TODO Check the validation has displayed
			cy.get('#toast-container').should('have.value', 'Remember AFP has to be YES or MAYBE and loan has to be active')
		
		})
	})

})