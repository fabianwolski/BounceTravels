import { mount } from '@cypress/react';
import App from '../../src/App';

describe('Bounce Travels App', () => {
  beforeEach(() => {
    mount(<App />);
    cy.intercept('GET', 'http://localhost:3002/country-info/*').as('fetchCountryInfo');
  });
  describe('Search functionality', () => {
    it('updates search input when the user types', () => {
      cy.get('.search-input').type('Ireland').should('have.value', 'Ireland');
    });

    it('displays country information when the search button is clicked', () => {
      cy.get('.search-input').type('Ireland');
      cy.get('.search-button').click();
      cy.get('.country-info-popup').should('be.visible');
      cy.get('.country-info').should('contain.text', 'Ireland');
    });
  });
});
