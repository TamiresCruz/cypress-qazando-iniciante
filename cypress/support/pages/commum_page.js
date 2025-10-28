/// <reference types="cypress" />

export default{

    acessarCadastroUsuario(){
        cy.visit('/')
            .get('.fa-user')
        
        cy.get('.fa-lock')
            .click()
    }

}