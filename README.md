CYPRESS DOCUMENTATION: https://docs.cypress.io/guides/getting-started/installing-cypress

go to root directory and run the following command:
npm install cypress
or: npm install cypress --save-dev


go to package.json file and add the following script

"scripts": {
    "cy:run": "cypress run",
    "test": "npm run cypress:run",
    "cy:open": "cypress open"
  },



npm run cy:open
(open cypress and run the test)

npm run cy:open

on vs code a cypress.config  folder will be created
go to chrome on cypress and click on valentine.cy.js
(run the test)


--> make sure to look for **valentine.cy.js** file inside of cypress->**e2e folder**->(should be) inside of **2-advanced-examples folder**.
