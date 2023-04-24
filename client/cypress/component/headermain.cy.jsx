import { mount } from '@cypress/react';
import App from '../../src/App';

describe('Bounce Travels App', () => {
  beforeEach(() => {
    mount(<App />);
    cy.intercept('GET', 'http://localhost:3002/country-info/*').as('fetchCountryInfo');
  });
  it('renders header component', () => {
    cy.get('.logo-container').should('be.visible');
    cy.get('.logo').should('be.visible');
    cy.get('.company-name').should('contain.text', 'BounceTravels');
  });

  it('renders main content component', () => {
    cy.get('.container-content').should('be.visible');
    cy.get('.title').should('contain.text', 'Country-Info');
    cy.get('.generator-button').should('be.visible');
    cy.get('.search-container').should('be.visible');
    cy.get('.search-input').should('be.visible');
    cy.get('.search-button').should('be.visible');
    cy.get('.image-wrapper').should('be.visible');
  });
});