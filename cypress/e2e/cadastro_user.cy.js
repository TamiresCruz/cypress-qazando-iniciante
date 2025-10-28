/// <reference types="cypress" />

import { faker, Faker } from '@faker-js/faker'
import commum_page from '../support/pages/commum_page'
import cadastro_user from '../support/pages/cadastro_user_page'

describe('Cadastro de usuário', () => {

    const name = faker.person.firstName()
    const email =  faker.internet.email()
    const password = faker.internet.password()

    //const name = 'Tamires Cruz'
    //const email =  'Test@test.com'
    //const password = '123456'

    beforeEach('Acessar a tela de cadastro', () =>{
        commum_page.acessarCadastroUsuario()
    })
    
    it('Validar o campo nome vazio', () => {
        cadastro_user.btnRegister()
        cadastro_user.registerErroMessage('O campo nome deve ser prenchido')
      
    })
    
    it('Validar o campo e-mail vazio', () => {
        cadastro_user.preencheNome(faker.person.fullName())
        cadastro_user.btnRegister()
        cadastro_user.registerErroMessage('O campo e-mail deve ser prenchido corretamente')
        
    })
    
    it('Validar o campo e-mail inválido', () => {
        cadastro_user.preencheNome(faker.person.fullName())
        cadastro_user.preencheEmail(faker.internet.domainWord())
        cadastro_user.btnRegister()
        cadastro_user.registerErroMessage('O campo e-mail deve ser prenchido corretamente')
    })
    
    it('Validar o campo senha vazio', () => {
        cadastro_user.preencheNome(faker.person.fullName())
        cadastro_user.preencheEmail(faker.internet.email())
        cadastro_user.btnRegister()
        cadastro_user.registerErroMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar o campo senha inválida', () => {
        cadastro_user.preencheNome(faker.person.fullName())
        cadastro_user.preencheEmail(faker.internet.email())
        cadastro_user.preencheSenha('123')
        cadastro_user.btnRegister()
        cadastro_user.registerErroMessage('O campo senha deve ter pelo menos 6 dígitos')
    })
    
    it.only('Validar o cadastro com sucesso', () => {
        cadastro_user.preencheNome(name)
        cadastro_user.preencheEmail(email)
        cadastro_user.preencheSenha(password)
        cadastro_user.btnRegister()
        cadastro_user.registerSuccessMessage('Cadastro realizado!', name)
    })

})