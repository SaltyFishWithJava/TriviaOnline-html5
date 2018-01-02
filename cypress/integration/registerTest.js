/*
test by zn
 */

describe('register page test', function () {

    let REGISTER_USERNAME = 'buy some cheese'
    let REGISTER_PASSWORD = 'buy_some_cheese'
    let REPEAT_PASSWORD = 'buy_some_cheese!'

    it('register page title is correct', function () {
        cy.visit('http://localhost:63342/TriviaOnline_h5/html5/register.html')
        cy.title().should('include', '用户注册')
    })

    context('before register input test',function () {
        beforeEach(function () {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('http://localhost:63342/TriviaOnline_h5/html5/register.html')
        })

        it('before register input exist',function () {
            cy.get('.username').should('have.class','username')
            cy.get('.password').should('have.class','password')
            cy.get('.rePassword').should('have.class','rePassword')
        })

        it('before register input empty',function () {
            cy.get('.username').should('have.value','')
            cy.get('.password').should('have.value','')
            cy.get('.rePassword').should('have.value','')
        })

        it('before register button exist',function () {
            cy.get('.register').should('have.text','注册')
        })
    })

    context('new register',function () {
        beforeEach(function () {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('http://localhost:63342/TriviaOnline_h5/html5/register.html')
        })


        it('should allow me to type username and password',function () {
            cy.get('.username').type(REGISTER_USERNAME)
            cy.get('.username').should('have.value',REGISTER_USERNAME)
            cy.get('.password').type(REGISTER_PASSWORD)
            cy.get('.password').should('have.value',REGISTER_PASSWORD)
            cy.get('.rePassword').type(REGISTER_PASSWORD)
            cy.get('.rePassword').should('have.value',REGISTER_PASSWORD)

            cy.get('.username').clear()
            cy.get('.password').clear()
            cy.get('.rePassword').clear()
        })

        // it('should hide error message before input', function () {
        //     cy.get('.errorText_password').should('have.attr', 'style', 'display: none;')
        //     cy.get('.errorText_repassword').should('have.attr', 'style', 'display: none;')
        // });

        it('should clear text input field after click register button', function () {
            cy.get('.username').type(REGISTER_USERNAME)
            cy.get('.password').type(REGISTER_PASSWORD)
            cy.get('.rePassword').type(REGISTER_PASSWORD)
            cy.get('.register').click()
            cy.get('.username').should('have.value','')
            cy.get('.password').should('have.value','')
            cy.get('.rePassword').should('have.value','')
        });

        it('should show error message when password less than 6 cahracters', function () {
            cy.get('.password').type('123')
            cy.get('.rePassword').focus()
            cy.get('.errorText_password').should('have.attr', 'style', 'display: block;')

        });

        it('should show error message when rePassword is diff from password', function () {
            cy.get('.password').type(REGISTER_PASSWORD)
            cy.get('.rePassword').type(REPEAT_PASSWORD)
            cy.get('.password').focus()
            cy.get('.errorText_repassword').should('have.attr', 'style', 'display: block;')
        });

    })

})