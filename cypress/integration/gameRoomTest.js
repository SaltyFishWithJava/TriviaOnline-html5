/*
test
 */

describe('游戏房间测试', function () {

    let LOGIN_USERNAME = 'buy some cheese'
    let LOGIN_PASSWORD = 'buy_some_cheese'

    it('page title is correct', function () {
        cy.visit('http://localhost:63342/TriviaOnline_h5/html5/login.html')
        cy.title().should('include', '用户登录')
    })

    context('before login test',function () {
        beforeEach(function () {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('http://localhost:63342/TriviaOnline_h5/html5/login.html')
        })

        it('before login input test',function () {
            cy.get('#username').should('have.class','username')
            cy.get('#password').should('have.class','password')
        })

        it('before login button test',function () {
            cy.get('#button').should('have.text','登录')
        })
    })

    context('when login test',function () {
        beforeEach(function () {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('http://localhost:63342/TriviaOnline_h5/html5/login.html')
        })

        it('input username',function () {
            cy.get('#username').type(LOGIN_USERNAME)
            cy.get('#username').should('have.value',LOGIN_USERNAME)
        })

        it('input password',function () {
            cy.get('#password').type(LOGIN_PASSWORD)
            cy.get('#password').should('have.value',LOGIN_PASSWORD)
        })

    })

    context('clear login input test',function () {
        beforeEach(function () {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('http://localhost:63342/TriviaOnline_h5/html5/login.html')
        })

        it('input username',function () {
            cy.get('#username').type(LOGIN_USERNAME).clear()
            cy.get('#username').should('have.value','')
        })

        it('input password',function () {
            cy.get('#password').type(LOGIN_PASSWORD).clear()
            cy.get('#password').should('have.value','')
        })

    })
})