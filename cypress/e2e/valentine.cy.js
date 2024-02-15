describe('valentines day', () => {
    it('should display the correct title', () => {
        cy.visit('https://negiakansha.github.io/valentine/');
        cy.get('h1').contains('have.text', 'Will you');

        //assemble, act, assert

//  1. assemble - visit the page
// cy.visit('https://negiakansha.github.io/valentine/');

// 2. act - do the thing / interract with the page
// cy.get('h1').contains('have.text', 'Will you');

// 3. assert - make an assertion
    });
});

// **********************************************
// **********************************************

// INFORMATION :

// go to root directory and run the following command:
// npm install cypress
// or: npm install cypress --save-dev



// go to package.json file and add the following script

// "scripts": {
//     "cy:run": "cypress run",
//     "test": "npm run cypress:run",
//     "cy:open": "cypress open"
//   },



// npm run cy:open
// (open cypress and run the test)

// npm run cy:open

// on vs code a cypress.config  folder will be created
// go to chrome on cypress and click on valentine.cy.js
// (run the test)