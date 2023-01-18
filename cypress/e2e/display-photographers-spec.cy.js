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
    
  });

  it('When a user visits the page, they can view the Form with the proper inputs', () => {

  });

  it("When a user fills out the form, the information is reflected in the input field's value", () => {

  });
});
