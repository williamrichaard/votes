export default class Cat {
    static httpRequestWithBody(method, endpoint, body, headers = {}, qs = {}, failOnStatusCode = false, timeout = Cypress.env('global.timeout')) {
        return cy.request({
            method: method,
            url: endpoint,
            body: body,
            headers: headers,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout,
            qs: qs
        })
    }

    static httpRequestWithoutBody(method, endpoint, headers = {}, qs = {}, failOnStatusCode = false, timeout = Cypress.env('global.timeout')) {
        return cy.request({
            method: method,
            url: endpoint,
            headers: headers,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout,
            qs: qs
        })
    }
}