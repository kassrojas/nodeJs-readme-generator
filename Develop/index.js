const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown.js');

// function userInput uses inquirer to prompt questions in terminal
const userInput = () => {
return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your application? The title should clarify the main goal of the project.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your application. What does it do? Why did you use the technologies that you did? What are some of the challenges that you faced? What are some features you would like to add in the future?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Describe instructions for installation of your application.',
        name: 'installation',
        default: 'N/A',
    },
    {
        type: 'input',
        message: 'If the user needs to run or install programs in order to run your program, list those steps here. If this does not apply, type N/A.',
        name: 'usage',
        default: 'N/A',
    },
    {
        type: 'list',
        message: 'Which license does your application use?',
        choices: ['ISC', 'MIT', 'MPL_2.0', 'IPL_1.0'],
        name: 'license',
        default:'MIT',
    },
    {
        type: 'input',
        message: 'List collaborators/team members that worked on this project. If there are none, type N/A.',
        name: 'contributing',
        default: 'N/A',
    },
    {
        type: 'input',
        message: 'Give detailed instructions on how to run tests on your program. Provide code examples and ways to run them.',
        name: 'test',
        default: 'N/A',
    },
    {
        type: 'input',
        message: 'What is your gitHub handle?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
])

};

// function creates newReadMe.md and logs error or sucess if done successfully
const writeFile = data => {
    fs.writeFile('newReadMe.md', data, error => {
        if (error){
            console.log(error);
        } else {
        console.log('Success!')
        }
    })
};

// grab data from userInput() and transfer input values to generateReadMe, transfer data to writeFile
userInput()
.then(input => {
    return generateReadMe(input);
})
.then(data => {
    return writeFile(data);
})
