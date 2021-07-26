import Cat from "./common/_cat.service"
import { Factory } from '../fixtures/factory'

const URL_VOTES = '/votes'
//cy.wrap armazenar o id do button 

export class TheCat extends Cat {

    static get_token(token) {
        if (token === 'valid') {
            token = "0078da61-52d8-421b-8764-b241ee9b4fb6" 
        }
        let header = {"x-api-key": token}
        return header
    }

    // o token esta vindo do vote.step
    static get_todos_votos(token) {
        let header = this.get_token(token)
        return super.httpRequestWithoutBody('GET', URL_VOTES, header)
    }

    static post_criar_votos(votes_type) {
        let body = Factory.postVotes(votes_type)
        return super.httpRequestWithBody('POST', URL_VOTES, body)
    }

    /* static get_voto_especifico(token) {
        if (token === 'valid') {
            token = "0078da61-52d8-421b-8764-b241ee9b4fb6" 
        }
        let header = {"x-api-key": token}
        let qs = {"order": "RANDOM"}
        return super.httpRequestWithoutBody('GET', URL_VOTES, header)
    } */
    static pegar_id_imagem() {
        return Factory.pegarImagemId()
    }

    static post_criar_votos_id(id) {
        let body = {
            "image_id": id,
            "sub_id": "my-user-1234",
            "value": 1
        }
        return super.httpRequestWithBody('POST', URL_VOTES, body)
    }

    static delete_voto_especifico(token, id) {
        let header = this.get_token(token)
        return super.httpRequestWithoutBody('DELETE', `${URL_VOTES}/${id}`, header)
    }
}