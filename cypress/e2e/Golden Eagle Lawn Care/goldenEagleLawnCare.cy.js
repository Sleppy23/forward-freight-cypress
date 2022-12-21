/// <reference types="cypress" />



describe('Golden Eagle automated test', () => {
    beforeEach(() => {
  
      cy.visit('https://goldeneaglelawncare.com')
    })
  
    it('Verify Home Page', () => {
      
      const goldenEagleLogo = '#1829253137'
  
      cy.get(goldenEagleLogo).should('be.visible')
  
    })
  
     it('verify Contact Us button', () => {
        const contactUsButton = '307094038'

        cy.get(contactUsButton).should('be.visible')

        })
    // it('verify instagram icon is visible', () => {
    
    //   const instagramIcon = '.dmSocialInstagram.dm-social-icons-instagram.oneIcon.ocialHubIcon.style5'
  
    //   cy.get('[aria-label="instagram"]').click();
    // })
  
    // it('verify that instagram account name', () => {
    //   cy.url().should('include', 'forwardfreightlogistics')
    // })
  
     })
    
  