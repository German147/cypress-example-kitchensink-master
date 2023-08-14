/// <reference types="cypress" />

context('UsingHooksInCypress', () => { 

    before(() => { 
        cy.request('https://api.spacexdata.com/v3/missions')
            .its('body')
            .should('have.length', 10);
    })
    beforeEach(() => { 
        cy.visit('/')
        it('logs a message', () => {
            cy.log('I am the beforeEach')
        })
    })

    after(() => {
        cy.log('Finally I am the after methods which is executed after all test')
    })

    afterEach(() => {
        cy.log('I am the aterEach')
    })
 
    it('types into an Email field', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('german@gmail.com')
        cy.wait(5000)
        console.log("My test has just finished")
    })

    it('Should link to the actions page correctly', () => {
    
        cy.findAllByText('Actions')
            .last()
            .click({ force: true })
        cy.url()
            .should('include', 'commands/actions');
    })

    it('lets you type into an input field', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email')
            .type('MyTest')
            .should('have.value', 'MyTest');
    })

    it('should not have an active class on inactive pages', () => {
        cy.visit('/commands/actions')
        cy.get('.dropdown-menu')
            .find('li')
            .first()
            .should('not.have.class', 'active')
            .find('a')
            .should('have.attr', 'href', '/commands/querying')
    })
})
