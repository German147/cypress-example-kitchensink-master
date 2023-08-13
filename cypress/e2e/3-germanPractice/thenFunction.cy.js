/// <reference types="cypress" />

const navbarText = Cypress.env('navbarText')

context('ThenFunctionInCypressTest', () => { 


    it('types into an Email field', () => { 

        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('barre@gmail.com')
        //Using then function we can use Non Cypress commands inside CyPress commads so they are executed synchroniously
        cy.wait(5000).then(() => { 
            fetch('https://api.spacexdata.com/v3/missions')
                .then((res) => res.json())
                .then((data) => {
                  //eslint-disable-next-line no-console     
                    console.log(data)
                 })
        })



    })

})