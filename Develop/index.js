// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown.js');

const userInput = () => {
return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your application. What does it do?',
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
        message: 'Describe the usage of the application.',
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
        message: 'Add contributors',
        name: 'contributing',
        default: 'N/A',
    },
    {
        type: 'input',
        message: 'Give detailed instructions on how to run tests on your program.',
        name: 'test',
        default: 'N/A',
    },
    {
        type: 'input',
        message: 'List out any future questions',
        name: 'questions',
        default: 'N/A',
    },
])

};

const writeFile = data => {
    fs.writeFile('newReadMe.md', data, error => {
        if (error){
            console.log(error);
        } else {
        console.log('Success!')
        }
    })
};

userInput()
.then(input => {
    return generateReadMe(input);
})
.then(data => {
    return writeFile(data);
})
