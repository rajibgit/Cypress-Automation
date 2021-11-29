describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Get an input, type into it and verify that the value has been updated
     // cy.get('.action-email')
      //  .type('fake@email.com')
       // .should('have.value', 'fake@email.com')

        //password
        //cy.get('.action-password')
       // .type('1234')
       // .should('have.value', '1234')

        cy.get('#username').type('bob@burgers.com')
        cy.get('#password').type('password123{enter}')
    })
  })