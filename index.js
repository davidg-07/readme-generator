// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import * as fs from 'fs';
import path from 'path';
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    /* Pass your questions in here */
    {type: 'list', name: 'license', message: 'choose your license', choices: ['option1', 'option2', 'GNU', 'MIT']},
    {type: 'input', name: 'email', message: 'what is your email address?'},
    {type: 'input', name: 'project', message: 'what is your project name?'},
    {type: 'input', name: 'github', message: 'What is your Github username?'},
    {type: 'input', name: 'descripton', message: 'Please write a short description of your project.'},
    {type: 'input', name: 'install', message: 'What are the steps required to install your project?'},
    {type: 'input', name: 'usage', message: 'How do you use this app?'},
    {type: 'input', name: 'test', message: 'What command should be run to run tests?'},
    {type: 'input', name: 'Contributers', message: 'What does the user need to know about contributing to the repo?'}

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    generateFile(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();

function generateFile(data) {
  const filePath = path.join(process.cwd(), 'Generated-Readme.md');
  fs.writeFileSync(filePath, convertToMarkDown(data))
}

function convertToMarkDown(data) {
  return `# Project 
  
  ${data.project}

 ## Description 

  ${data.description}
   
  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributers

  ${data.contributers}

  ## Licenses

  ${data.license}

  ## Tests

  ${data.test}
  
  ## Email
  
  ${data.email}
  
  ## Github
  
  ${data.github}
  `;
}