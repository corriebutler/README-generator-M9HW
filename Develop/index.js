// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log(`Please enter a valid Project Title!`);
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Give a description of your project (Required):',
        validate: descriptionInput => {
            if (descriptionInput) {
                console.log(`Please enter a valid project description!`);
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'What license type would you like to assign to this project?',
        choices: ['Apache 2.0', 'GPLv2','GLPv3','MIT','None'],        
        validate: licenseInput => {
            if (licenseInput) {
                console.log(`Please select one of the license types. If you do not wish to apply a license type, please select "None".`);
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'What will this project be used for?',
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: 'What is needed for someone to contribute to the project?',
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'What are the steps to install your project?',
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your GitHub username? (Required):',
        validate: githubInput => {
            if (githubInput) {
                console.log(`Please enter your Github Username!`);
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectQuestions',
        message: 'What is your best email for contact on this project? (Required):',
        validate: questionsInput => {
            if (questionsInput) {
                console.log(`Please enter a valid email address!`);
                return true;
            } else {
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Generate the actual README file that pulls data
// fs.writeFile('README.md',dataPlaceHolder), err => {
    //     if(err) throw err;
    
    //     console.log('README was now generated. Checkout README.md to the see output!');
    // };
    
    // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => console.log(answers))
}

// Function call to initialize app
init();
