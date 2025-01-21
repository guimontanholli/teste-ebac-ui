/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

it('Deve fazer login com sucesso', () =>{
cy.get('#username').type ('guilherme@teste.com.br')
cy.get('#password').type ('teste123')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, guilherme (não é guilherme? Sair')

});

it('Deve exibir mensagem de erro ao inserir user inválido', () => {
cy.get('#username').type ('guilher')
cy.get('#password').type ('teste123')
cy.get('.woocommerce-form > .button').click()
//cy.get('.woocommerce-error > li').should('contain', 'Erro: O usuário guilher não está registrado neste site.')
cy.get('.woocommerce-error').should('exist')

});

it('Deve exibir senha inválida', () => {
cy.get('#username').type ('guilherme@teste.com.br')
cy.get('#password').type ('teste')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error').should('exist')
});


it('Login com sucesso - massa de dados', () => {
cy.get('#username').type (perfil.usuario)
cy.get('#password').type (perfil.senha)
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, guilherme (não é guilherme? Sair')
});

it('Login com sucesso - fixture', () => {
        cy.fixture('perfil').then( dados => {
        cy.get('#username').type (perfil.usuario)
        cy.get('#password').type (perfil.senha , {log: false});
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, guilherme (não é guilherme? Sair')

    })
    });

    it.only('Deve fazer login - usando comandos customizados', () => {
        cy.login('guilherme@teste.com.br' , 'teste123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, guilherme (não é guilherme? Sair')
    });

})