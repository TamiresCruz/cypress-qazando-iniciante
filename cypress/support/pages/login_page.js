/// <reference types="cypress" />

export default{

    acessarTelaLogin(){
        cy.visit('/')
            .get('.fa-user')
               
        cy.get('.fa-user')
            .click()    
    },
    
    preencherEmail(email){
        cy.get('#user')
            .type(email)
          
    },

    preencherSenha(password){
        cy.get('#password')
            .type(password)
    },
    
    checkLembrar(){
        cy.get('#materialUnchecked')
            .check()
          
    },

    errorMessage(message){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', message)

    },

    btnLogin(){
        cy.get('#btnLogin')
            .click()
    },

    loginSucesse(messageSucess, email){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', messageSucess)

        cy.get('#swal2-html-container')
            .should('have.text', `Olá, ${email}`)
    }




}

