import { mount } from '@cypress/react';
import App from '../../src/App';
describe('Bounce Travels App', () => {
  beforeEach(() => {
    mount(<App />);
    cy.intercept('GET', 'http://localhost:3002/country-info/*').as('fetchCountryInfo');
  });
  it('renders footer component', () => {
    cy.get('.footer-container').should('be.visible');
    cy.get('.footer-title-text').should('be.visible');
    cy.get('.footer-grid').should('be.visible');
    cy.get('.footer-text').should('have.length', 11);
    cy.get('.footer-logo').should('be.visible');
    cy.get('.footer-company-name').should('contain.text', 'BounceTravels');
  });
describe('Footer buttons', () => {
  it('displays country information when a footer button is clicked', () => {
    cy.get('.footer-text').first().click();
    cy.get('.country-info-popup').should('be.visible');
    cy.get('.country-info').should('contain.text', 'Spain');
  });
});
});