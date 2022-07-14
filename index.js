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
    {type: 'list', name: 'license', message: 'choose your license', choices: ['option1', 'option2', 'option3', 'MIT']},
    {type: 'input', name: 'email', message: 'what is your email address'},
    {type: 'input', name:'project', message: 'what is your project name?'},

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
  return `# ${data.project}

  ## Licenses
  
  ${data.license}
  
  ## Email
  
  ${data.email}`;
}