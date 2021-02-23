


export abstract class BasePage {

    private tabs: HTMLElement[];

    //if no need of addind this to the page then pass null on child's super() call
    //if so, the tabs property will be null as well
    constructor(...elems: HTMLElement[]) {
        if (elems === null){
            return;
        }

        elems.forEach(elem => {this.tabs.push(elem)});
    }

    get Tabs() {
        return this.tabs;
    }

    public search(locator: string, keyword: string): Cypress.Chainable<JQuery<HTMLElement>> {

        let input = cy.get(locator);
        return input.type(keyword)
    }

}