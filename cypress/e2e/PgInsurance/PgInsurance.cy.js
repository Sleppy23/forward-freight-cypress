/// <reference types="cypress" />



describe('Pgi Insurance automated test', () => {
  beforeEach(() => {

    cy.visit('http://www.pginsurancetaxes.com')
  })

  it('Verify Home Page', () => {
    
    const pgiLogo = '#1276536885'

    cy.get(pgiLogo).should('be.visible')

  })

  // it('verify instagram icon is visible', () => {
  
  //   const instagramIcon = '.dmSocialInstagram.dm-social-icons-instagram.oneIcon.ocialHubIcon.style5'

  //   cy.get('[aria-label="instagram"]').click();
  // })

  // it('verify that instagram account name', () => {
  //   cy.url().should('include', 'forwardfreightlogistics')
  // })

   })
  
