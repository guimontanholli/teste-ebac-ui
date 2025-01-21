/// <reference types="cypress" />

describe('Funcionalidade destalhes da conta', () => {

    beforeEach(() => {
cy.visit('minha-conta/edit-account/')
cy.login('guilherme@teste.com.br' , 'teste123')
        });

    it('Deve completar detalhes da conta ', () => {
cy.detalhesConta('Guilherme', 'Montanholli', 'gui_mont')
cy.get('.woocommerce-message').should('exist')
    });
    
});