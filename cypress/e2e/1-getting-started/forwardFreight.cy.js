/// <reference types="cypress" />



describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://forwardfreightlogistics.net/')
  })

  it('should display Connect Today', () => {
    
    const connectTodayButton = '#1532578369'

    cy.get(connectTodayButton).should('be.visible')

  })

  it('should fill out Connect Today form', () => {
  
    const connectButton = '#1532578369'

    cy.get(connectButton).click();
    
    cy.get('[name="dmform-0"]')
    .should('be.visible')
    .type('John Doe')

    cy.get('[name="dmform-4"]')
    .should('be.visible')
    .type('922933627348992')

    cy.get('[name="dmform-1"]')
    .should('be.visible')
    .type('doingcoolstuff@coolstuff.com')

    cy.get('[name="dmform-5"]')
    .should('be.visible')
    .type('Fireball Inc.')

    cy.get('[name="dmform-6"]')
    .should('be.visible')
    .type('Hoolywood FL')

    cy.get('[name="dmform-3"]')
    .should('be.visible')
    .type('Test by Hector making sure website form works!')

  })


  // it('should fill out connect today form'), () => {
  //   // cy.get('[name="dmform-0"]')
  //   // .should('be.visible')
  //   // .type('John Doe')
  //     // cy.get('[name="dmform-0"]').click();
  //   // cy.get('[name="dmform-0"]').type('Robert');
  //   // cy.get('#912489313').click();
  //   // cy.get('#912489313').type('Robert');

  // }

  // it('should fill out Connect Today', () => {
  
  //   // const name = '#1912489313'

  //   // cy.get(name).type('Robert Sleppy')
  //   cy.get('[name="dmform-0"]').click();

  // })

})
  
