class testObj{
    getStarted()
    {
        cy.get('.buttons_AeoN > [href="/docs/getting-started/introduction"]').click()
        
    }
    whyReact(){
        cy.get(':nth-child(2) > .menu__link').click
    }

     clickButton(){
        cy.get('[class="clean-btn"]').eq(1).click()
     }

     searchbutton(){
        cy.get('.DocSearch-Button-Placeholder').click().type('overlay')
     }

     clickSearch(){
        cy.get('#docsearch-item-0 > a > .DocSearch-Hit-Container > .DocSearch-Hit-content-wrapper > .DocSearch-Hit-title').click()
     }

     assert(){
        cy.get('[class="anchor anchorWithStickyNavbar_LWe7"]').should('contain', 'Overview')
     }

      changetheme(){
        cy.get('[class="toggleIcon_oIOL darkToggleIcon_ekgs"]').click()
         
      }

      page(){
        cy.get('[id="__docusaurus"]').should('contain', 'React Bootstrap')
      }

     
}
export default new testObj;