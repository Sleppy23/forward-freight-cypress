/// <reference types="cypress" />



describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://forwardfreightlogistics.net/')
  })

  it('should display connect today', () => {
    
    const connectTodayButton = '#1532578369'

    cy.get(connectTodayButton).should('be.visible')

  })

  it('verify instagram icon is visible', () => {
  
    const instagramIcon = '.dmSocialInstagram.dm-social-icons-instagram.oneIcon.ocialHubIcon.style5'

    cy.get('[aria-label="instagram"]').click();
  })

  it('verify that instagram account name', () => {
    cy.url().should('include', 'forwardfreightlogistics')
  })

   })
  
