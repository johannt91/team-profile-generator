const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');


const employees = [];


//===== MANAGER INPUT =====//
const managerInput = () => {
    console.log(`
=====================
Enter manager details
=====================
    `);
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

        ])
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employees.push(manager);
            return managerChoices();

        })
};

//===== ENGINEER QUESTIONS =====//
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
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        employees.push(engineer);
        return managerChoices();
    });
}

//===== INTERN QUESTIONS =====//
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
            message: "Enter your Intern's school. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Intern's school!");
                    return false;
                }
            }
        }
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(intern);
        return managerChoices();
    });
}

//===== EMPLOYEE TYPES CHOICES =====//
const managerChoices = () => {
    console.log(`
    =======================
    Choose an employee type
    =======================
        `);
        return inquirer
            .prompt([{
                type: 'list',
                name: 'employeeType',
                message: 'Would you like to add another employee?',
                choices: ['Engineer', 'Intern', 'None']
            }])
            .then(managerChoices => {
    
                if (managerChoices.employeeType === 'Engineer') {
                    return engineerQuestions();
                } else if (managerChoices.employeeType === 'Intern') {
                    return internQuestions();
                } else if (managerChoices.employeeType === 'None') {
                    renderPage();

                }
            })
    }

//===== RENDER HTML PAGE =====//
const renderPage = (fileName) => {
    fileName = fs.writeFile('./dist/index.html', generatePage(employees), err => {
        if (err) {
            console.log("Error: ", err)
            return;
        } else {
            console.log("Profile generation successfull!");
        }
    });
};


managerInput();