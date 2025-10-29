/// <reference types="cypress" />

export default{
    
    btnRegister(){
        cy.get('#btnRegister')
            .click()
    },

    registerErroMessage(message){
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', message)

    },

    preencheNome(nome){
        cy.get('#user')
            .type(nome)
    },

    preencheEmail(email){
        cy.get('#email')
            .type(email)
    },

    preencheSenha(password){
        cy.get('#passwordx')
            .type(password)
    },

    registerSuccessMessage(registersucess, name){
        cy.get('#swal2-title')
            .should('have.text', registersucess)
        
        cy.get('#swal2-html-container')
           .should('be.visible', `Bem-vindo ${name}`)
    }

}
