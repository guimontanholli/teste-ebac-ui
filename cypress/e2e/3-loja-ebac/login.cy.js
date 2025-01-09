/// <reference types="cypress"/>

describe('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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

})