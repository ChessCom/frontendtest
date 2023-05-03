describe('Chessboard', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/frontendtest/')
  })

  it('Activates square on click and display move', () => {
    cy.get('[data-cy=c6]').should('not.have.class', 'selected')
    cy.get('[data-cy=c6]').click()
    cy.get('[data-cy=c6]').should('have.class', 'selected')

    cy.get('.move-text').should('have.length', 1).should('have.text', 'c6')

    cy.get('[data-cy=e4]').click()
    cy.get('[data-cy=e4]').should('have.class', 'selected')

    cy.get('.move-text').should(($move) => {
      expect($move).to.have.length(2)
      expect($move[0]).to.have.text('c6')
      expect($move[1]).to.have.text('e4')
    })
  })

  it('Does not deactive on multiple clicks', () => {
    cy.get('[data-cy=e4]').click()
    cy.get('[data-cy=e4]').should('have.class', 'selected')
    cy.get('[data-cy=e4]').click()
    cy.get('[data-cy=e4]').should('have.class', 'selected')

    cy.get('.move-info').should('have.length', 1)
    cy.get('.move-text').should('have.length', 1).should('have.text', 'e4')
  })
})
