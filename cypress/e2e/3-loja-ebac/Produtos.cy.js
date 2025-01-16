/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
it('Selecionar produtos da lista', () => {
    cy.get('.product-block')
        //.first()
        //.last()
        //.eq(2)
        .contains('Abominable Hoodie')
        .click()
    cy.get('.product_title').should('exist')
        
});

});