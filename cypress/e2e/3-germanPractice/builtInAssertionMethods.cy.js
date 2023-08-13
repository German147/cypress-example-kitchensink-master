/// <reference types="cypress"/>

context('builtInAssertions', () => { 

    it('Should link to the actions page correctly', () => { 
        cy.visit('/')
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

    it('lets you clear an input field', () => { 
        cy.visit('/commands/actions')
        cy.findByLabelText('Describe:')
            .type('MyDescription')
            .should('have.value', 'MyDescription')
            .clear()
            // .should('not.have.value','MyDescription')
            .should('have.value', '');
    })

    it('lets you check a checkbox', () => { 
        cy.visit('/commands/actions')
        cy.get('.action-checkboxes [type="checkbox"]')
            //.first() or      .eq(1).check({ force: true }) 
            .eq(1)
            .check({force:true})
            .should('be.checked');
    })


})