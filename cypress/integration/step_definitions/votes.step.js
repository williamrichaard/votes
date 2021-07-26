/// <reference types="cypress" />
import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { TheCat } from '../../services/thecat.service'

When(`solicitar todos os votos de um usuario usando o token {string}`, (token) => {
    TheCat.get_todos_votos(token).then(votes => {
        cy.wrap(votes).as('Response')
    })
});

When(`postar os votos do tipo {string}`, (votes_type) => {
    TheCat.post_criar_votos(votes_type).then(post_response => {
        cy.wrap(post_response).as('Response')
    })
});

/* When(`solicitar um tipo {string} de voto da conta`, (token) => {
    TheCat.get_voto_especifico(vote_id).then(token => {
        cy.wrap(token).as('Response')
    })
}); */

Given(`que tenha o ID de uma image`, () => {
	TheCat.pegar_id_imagem().then(id => {
        cy.wrap(id).as('ID_img')
    })
});

And(`que tenha um voto cadastrado no thecatapi`, () => {
    cy.get('@ID_img').then(res_id => {
        TheCat.post_criar_votos_id(res_id).then(vote_id => {
            cy.wrap(vote_id).as('ID_vote')
        })
    })
});

When(`deletar um tipo {string} de voto da conta`, (token) => {
    cy.get('@ID_vote').then(res_vote_id => {
        TheCat.delete_voto_especifico(token, res_vote_id).then(post_response => {
            cy.wrap(post_response).as('Response')
        })
    })
});

Then(`deve ser respondido o schema {string} com status {int}`, (schema, status) => {
    cy.get('@Response').then(res => {
        cy.contractValidation(res, schema, status).then(valid => {
            expect(valid).to.be.true
        })
    })
});