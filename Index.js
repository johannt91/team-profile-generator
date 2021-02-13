const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');
const fs = require('fs');
const inquirer = require('inquirer');


let managerData;
const engineerArray = [];
const internArray = [];

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
                managerChoices();
            } else {
                generatePage(managerData);
            }
        })
};

const managerChoices = () =>{
    return inquirer
    .prompt([{
        type: 'list',
        name: 'employeeType',
        choices: ['Engineer', 'Intern', 'No']
    }])
    .then(managerChoices => {
                        
        if (managerChoices.employeeType === 'Engineer') {
            return engineerQuestions();
        } else if (managerChoices.employeeType === 'Intern') {
            return internQuestions();
        } else if (managerChoices.employeeType === 'No') {
            generatePage(managerData, engineerArray, internArray);
        }
    });
}

const engineerQuestions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "Enter your Engineer's name. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter your Engineer's ID. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Engineer's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your Engineer's email address. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Engineer's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter your Engineer's github username. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Engineer's github username!");
                    return false;
                }
            }
        }
    ]).then(data => {
        let engineer = new Engineer (data.name, data.id, data.email, data.github);
        engineerArray.push(engineer);
        console.log(engineerArray);
        return managerChoices();
    });
}

const internQuestions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "Enter your Intern's name. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter your Intern's ID. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Intern's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your Intern's email address. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Intern's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter your Intern's schoool username. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Intern's schoool username!");
                    return false;
                }
            }
        }
    ]).then(data => {
        let intern = new Intern (data.name, data.id, data.email, data.school);
        internArray.push(intern);
        console.log(internArray);
        return managerChoices();
    });
}

managerInput();
