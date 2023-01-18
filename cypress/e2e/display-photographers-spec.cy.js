describe('Visiting Shutterbugs Tracker Application', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/photographers', {
      method: 'GET',
      fixture: '../fixtures/photographers.json',
    }).as('getPhotographers');

    cy.visit('http://localhost:3000');
  });

  it('When a user visits the page, they can see the "Shutterbugs" logo along with an "about" link', () => {
    cy.get('.header').get('.logo-nav-link > img[alt="Shutterbugs Logo"]').click();
    cy.get('li').get('.about-nav-link').click();
    // cy.get('h1').contains('Burrito Builder');

    // cy.get('section > :nth-child(1)')
    //   .should('contain', 'Valentino')
    //   .and('contain', 'beans')
    //   .and('contain', 'lettuce')
    //   .and('contain', 'carnitas')
    //   .and('contain', 'queso fresco')
    //   .and('contain', 'jalapeno');

    // cy.get('section > :nth-child(2)')
    //   .should('contain', 'Bambounou')
    //   .and('contain', 'steak')
    //   .and('contain', 'pico de gallo')
    //   .and('contain', 'lettuce')
    //   .and('contain', 'carnitas')
    //   .and('contain', 'queso fresco')
    //   .and('contain', 'jalapeno');

    // cy.get('section > :nth-child(3)')
    //   .should('contain', 'Sasha')
    //   .and('contain', 'sofritas')
    //   .and('contain', 'beans')
    //   .and('contain', 'sour cream')
    //   .and('contain', 'carnitas')
    //   .and('contain', 'queso fresco');
  });

  it('When a user visits the page, they can view the Form with the proper inputs', () => {
    // cy.get('form').get('input[name="name"]').type('text').should("have.value", "text");

    // cy.get('form').get('button').contains('beans');
    // cy.get('form').get('button').contains('steak');
    // cy.get('form').get('button').contains('carnitas');
    // cy.get('form').get('button').contains('sofritas');
    // cy.get('form').get('button').contains('lettuce');
    // cy.get('form').get('button').contains('queso fresco');
    // cy.get('form').get('button').contains('pico de gallo');
    // cy.get('form').get('button').contains('hot sauce');
    // cy.get('form').get('button').contains('guacamole');
    // cy.get('form').get('button').contains('jalapenos');
    // cy.get('form').get('button').contains('cilantro');
    // cy.get('form').get('button').contains('sour cream');

    // cy.get('form').get('button').contains('Submit Order');
  });

  it("When a user fills out the form, the information is reflected in the input field's value", () => {
    // cy.get('form').get('input[name="name"]').type('text');
    // cy.get('form').get('input[name="name"]').should('have.value', 'text');

    // cy.get('form').get('button[name="beans"]').click();
    // cy.get('form').get('p').should('contain', 'Order: beans');
    // cy.get('form').get('button[name="steak"]').click();
    // cy.get('form').get('p').should('contain', 'Order: beans, steak');
    // cy.get('form').get('button[name="carnitas"]').click();
    // cy.get('form').get('p').should('contain', 'Order: beans, steak, carnitas');
    // cy.get('form').get('button[name="sofritas"]').click();
    // cy.get('form').get('p').should('contain', 'Order: beans, steak, carnitas, sofritas');
    // cy.get('form').get('button[name="lettuce"]').click();
    // cy.get('form').get('p').should('contain', 'Order: beans, steak, carnitas, sofritas, lettuce');
  });
});
