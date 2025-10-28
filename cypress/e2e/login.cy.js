/// <reference types="cypress" />
import login_page from '../support/pages/login_page'
import { faker, Faker } from '@faker-js/faker'

describe('Login', () => {

    const email = faker.internet.email()
    const password = faker.internet.password()

    beforeEach('Tela de Login', () => {
        login_page.acessarTelaLogin()
    })

    
    it('Validar o campo e-mail vazio', () => {
        login_page.btnLogin()
        login_page.errorMessage('E-mail inválido.')
    })
    
    it('Validar o preenchimento com e-mail inválido', () => {
        login_page.preencherEmail(faker.internet.domainSuffix())
        login_page.btnLogin()
        login_page.errorMessage('E-mail inválido.')
        
    })
    
    it('Validar o campo senha vazio', () => {
        login_page.preencherEmail(email)
        login_page.btnLogin()
        login_page.errorMessage('Senha inválida.')
    })
    
    it('Validar o preenchimento do campo senha inválida', () => {
        login_page.preencherEmail(email)
        login_page.preencherSenha('123')
        login_page.btnLogin()
        login_page.errorMessage('Senha inválida.')        
        
    })
    
    it('Validar o check no lembrar de mim', () => {
        login_page.preencherEmail(email)
        login_page.preencherSenha(password)
        login_page.checkLembrar()

    })
    
    it('Login com sucesso', () => {
        login_page.preencherEmail(email)
        login_page.preencherSenha(password)
        login_page.btnLogin()
        login_page.loginSucesse('Login realizado', email)

        
    })

})