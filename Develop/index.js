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
                return false;
            }
        }
    }
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
