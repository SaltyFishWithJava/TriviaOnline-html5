/*
test by zn
 */

describe('login page test', function () {

    let LOGIN_USERNAME = 'buy some cheese'
    let LOGIN_PASSWORD = 'buy_some_cheese'

    it('login page title is correct', function () {
        cy.visit('http://localhost:63342/TriviaOnline_h5/html5/login.html')
        cy.title().should('include', '用户登录')
    })

    context('before login input test',function () {
        beforeEach(function () {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('http://localhost:63342/TriviaOnline_h5/html5/login.html')
        })

        it('before login input exist',function () {
            cy.get('#username').should('have.class','username')
            cy.get('#password').should('have.class','password')
        })

        it('before login input empty',function () {
            cy.get('#username').should('have.value','')
            cy.get('#password').should('have.value','')
        })

        it('before login button exist',function () {
            cy.get('#button').should('have.text','登录')
        })
    })

    context('new login',function () {
        beforeEach(function () {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('http://localhost:63342/TriviaOnline_h5/html5/login.html')
        })


        it('should allow me to type username and password',function () {
            cy.get('#username').type(LOGIN_USERNAME)
            cy.get('#username').should('have.value',LOGIN_USERNAME)
            cy.get('#password').type(LOGIN_PASSWORD)
            cy.get('#password').should('have.value',LOGIN_PASSWORD)

            cy.get('#username').clear()
            cy.get('#password').clear()

        })

        it('should clear text input field after login', function () {
            cy.get('#username').type(LOGIN_USERNAME)
            cy.get('#password').type(LOGIN_PASSWORD)
            cy.get('#button').click()
            cy.get('#username').should('have.value','')
            cy.get('#password').should('have.value','')
        });

    })

    context('upload register',function () {
        it('should upload new page', function () {
            cy.visit('http://localhost:63342/TriviaOnline_h5/html5/login.html')
            cy.get('.register').click()
            cy.location().should(function(location) {
                expect(location.hostname).to.eq('localhost')
                expect(location.href).to.eq('http://localhost:63342/TriviaOnline_h5/html5/register.html')
                // expect(location.origin).to.eq('http://localhost:8000')
                expect(location.pathname).to.eq('/TriviaOnline_h5/html5/register.html')
                expect(location.protocol).to.eq('http:')
                // expect(location.search).to.eq('?q=dan')
                // expect(location.toString()).to.eq('http://localhost:8000/app/index.html?q=brian#/users/123/edit')
            })
        });
    })

})