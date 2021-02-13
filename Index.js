const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require ('./src/generatePage');
const fs = require('fs');
const inquirer = require('inquirer');


let managerData;
const engineer = [];
const intern = [];

const managerChoices = [{
    type: 'list',
    name: 'employeeType',
    choices: ['Engineer', 'Intern', 'No']
}];


const managerInput = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Enter manager's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter your ID (Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address (Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter your office number!(Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please enter your office number!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: false
            },
        ])
        .then(employeeData => {
            managerData = employeeData;
            if (managerData.confirmAddEmployee) {
                return inquirer.prompt(managerChoices)
                .then(managerChoices => {
                    if ( managerChoices.employeeType === 'Engineer') { console.log('This is the choice'); }
                    else if ( managerChoices.employeeType === 'Intern') { console.log('This is the intern'); }
                    else if ( managerChoices.employeeType === 'No') { return console.log(generatePage(managerData)); } 
                });
            }
            else {
                return console.log(generatePage(managerData));
            } 
    })
};


managerInput();