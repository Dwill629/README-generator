//external packages
const inquirer = require('inquirer');
const fs = require('fs');                                                                                     
// Inquirer prompts for userResponses
inquirer.prompt([
    {
        type: 'input',
        message: "What is your GitHub username? (No @ necessary)",
        name: 'username',
        default: 'dwill629',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Provide a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'None'],
        name: 'license'
    }

]).then(response => {
      const content = `
      # ${response.title}
      
      ## Table of Contents
    
    * [Installation](#installation)
    * [Usage](#Usage)
    * [Contributions](#Contributions)
    * [Tests](#Tests)
    * [License](#License)
    * [Questions](#Questions)
    
    
    ## Installation
    
    To install the proper dependencies, please use the following command:
    \`\`\`
    ${response.installation}
    \`\`\`
    
    ## Usage
    
    ${response.usage}

    ## Contributions

    ${response.contributing}
    
    ## Tests
    
    \`\`\`
    ${response.tests}
    \`\`\`
    
    ## License
    
    This application is protected by the ${response.license} license. 
    
    ## Questions
    
    For any questions relating to this application, please reach out to me at the following:
    Email: ${response.email}
    
    Github: [${response.username}](github.com/${response.repo})
    `
      fs.writeFile('README.md', content, (err) =>
        err ? console.error(err) : console.log('Finished!'))
    
    });