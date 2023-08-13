/// <reference types="cypress"/>
const navbarText = Cypress.env('navbarText')
context('AsincPractice',()=> {

//here it is shown how sync and async work on cypress
//cypress commands are executed one after the non-cypress commands.
//cy commands are sync because they are axecuted one step after the other, 
//and if one fails the following steps are not executed and the test falis.    
    it('types into an Email field', () => { 
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('german@gmail.com')
        cy.wait(5000)
        console.log("My test has just finished")
    })
})
