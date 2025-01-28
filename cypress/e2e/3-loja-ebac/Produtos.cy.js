/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import produtosPage from '../../support/page-objects/produtos.page';

describe('Funcionalidade produtos', () => {

    beforeEach(() => {
    produtosPage.visitarUrl()
    });
    
it('Selecionar produtos da lista', () => {
   produtosPage.buscarProdutoLista('Arcadio Gym Short')
    cy.get('.product_title').should('exist')
        
});

it('Deve buscar um produto com sucesso', () => {
    produtosPage.buscarProduto('Aero Daily Fitness Tee')
    cy.get('.product_title').should('contain' , 'Aero Daily Fitness Tee')
});

it('Deve visitar a página do produto', () => {
    produtosPage.visitarProduto('Aether Gym Pant')
    cy.get('.product_title').should('contain' , 'Aether Gym Pant')
});

it('Deve adicionar um produto no carrinho', () => {
    let qtd = 2
    produtosPage.buscarProduto('Aero Daily Fitness Tee')
    produtosPage.addProdutoCarrinho('M', 'Brown', qtd)
});

it.only('Deve adicionar um produto no carrinho buscando da massa de dados', () => {
    cy.fixture('produtos').then(dados => {

        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[1].tamanho,
            dados[1].cor,
            dados[1].quantidade)
    })    
    
});

});