describe('Creating a new task', () => {
  it('Displays the new to-do in the list', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="newTaskButton"]').click()

    cy.get('form').within(() => {
      cy.get('input').type('new to-do')
      cy.get('textarea').type('to-do description')
      cy.get('[data-testid="saveTaskButton"]').click()
    })

    cy.contains('new to-do')
    cy.contains('to-do description')
  })
})
