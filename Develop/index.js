// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        type: 'checkbox',
        name: 'projectScripts',
        message: 'What languages did you use to build your project?',
        choices: ['HTML', 'CSS', 'Bootstrap','JavaScript','JQUERY','ES6','Node','Other']
    },
    {
        type: 'list',
        name: 'license',
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
        name: 'projectTest',
        message: 'What tests were included in this project?',
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your GitHub username?:',
    },
    {
        type: 'input',
        name: 'projectQuestions',
        message: 'What is your best email for contact on this project?:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Generate the actual README file that pulls data
    fs.writeFile(fileName, data, err => {
            if(err) {
                console.log(err);;
            };
            console.log('README was now generated. Checkout README.md to the see output!');
        });
}


    
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then (answers => console.log(answers))
        .then (answers => {
            writeToFile('../dist/README.md', answers, err => {
                if (err) {
                    console.log(err);
                }
                console.log('Your inputs have been written to a new README file. Check the dist folder to find the README.md file you created!');
            })
        })
}

// Function call to initialize app
init();
