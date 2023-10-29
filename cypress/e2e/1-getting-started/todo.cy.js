//  <reference types="cypress" />
// import testObj from './pages/week1.Page';
 import week1Page from "./pages/week1.Page";
 

// Welcome to Cypress!

// class testObj{
//   login(){
//       return cy.get('[data-testid="royal_email"]').type('davidsonmm9@gmail.com')
//   }

// }
// export default testObj
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('the first suite', () => {
  beforeEach(() => {
    cy.visit('https://react-bootstrap.netlify.app/')
  })
  
  it ('first test',()=>{
     cy.wait(100)
week1Page.getStarted();
 cy.wait(100)
 week1Page.whyReact();
 week1Page.clickButton();
 week1Page.searchbutton();
 week1Page.clickSearch();
week1Page.assert();
 week1Page.changetheme();
 week1Page.page();
  })
})
  