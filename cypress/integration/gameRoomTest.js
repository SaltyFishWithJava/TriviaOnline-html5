/*
test by zn
 */

describe('gameRoom page test', function () {

    let LOGIN_USERNAME = 'tt7'
    let LOGIN_PASSWORD = '123456'
    let GAMEROOM_URL = 'http://localhost:63342/TriviaOnline_h5/html5/gameRoom.html'
    let LOGIN_URL = 'http://localhost:63342/TriviaOnline_h5/html5/login.html'

    context('gameRoom page title is correct', function () {
        it('enter gameRoom success', function () {
            cy.visit(LOGIN_URL)
            cy.get('#username').type(LOGIN_USERNAME)
            cy.get('#password').type(LOGIN_PASSWORD)
            cy.get('#button_login').click()

            cy.get('#createNewRoom').click()
            cy.get('#roomName').should('exist')
            cy.get('button#createRoomButton').should('exist')
            var timestamp = Date.parse(new Date())
            cy.get('#roomName').type(timestamp)
            cy.get('#createRoomButton').click()
            cy.location().should(function (location) {
                expect(location.pathname).to.eq('/TriviaOnline_h5/html5/gameRoom.html')
            })
        })

        it('title correct', function () {
            cy.visit(GAMEROOM_URL)
            cy.title().should('include', '游戏房间')
        })
    })


})