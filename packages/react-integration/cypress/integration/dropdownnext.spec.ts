describe('Dropdown demo test', () => {
  it('navigate to demo section', () => {
    cy.visit('http://localhost:3000/dropdown-next-demo-nav-link');
  });

  /*  it('opens dropdown menu when clicked', () => {
    cy.get('[data-cy="toggle"]').click({ force: true });
    cy.get('[data-cy="toggle"]').should('have.class', 'pf-m-expanded');
    cy.get('[data-cy="toggle"]').click({ force: true });
    cy.get('[data-cy="toggle"]').should('not.have.class', 'pf-m-expanded');
  }); */

  it('opens dropdown menu when enter key pressed', () => {
    cy.get('[data-cy="toggle"]').trigger('keydown', { key: 'Enter' });
    cy.get('[data-cy="toggle"]').should('have.class', 'pf-m-expanded');
  });
});
