import { AutomationBase } from './base';


export class CommonAPI implements AutomationBase {

    public get baseUrl() : string {
        return Cypress.config().baseUrl;
    }
    
    // url should be passed if not going to navigate to the baseUrl
    // specified in the config for cypress
    init(url?: string): void {
        if(url){
            cy.visit(url);
            return;
        }

        cy.visit(this.baseUrl);
    }

    teardown(): void {
        // add screnshots if failed tests and log for each test what the error is
    }

    getConfigSetting(key: string): string {
        return Cypress.env(key)
    }

}