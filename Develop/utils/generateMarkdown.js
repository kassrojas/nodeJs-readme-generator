function generateMarkdown(data) {
  return `
  
# ${data.title}

[![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})



## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following commands. ${data.installation}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license}.

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

${data.questions}.

If you have any other questions, please reach out via ${data.email} or visit my GitHub account ${data.gitHub}.

`;
}

module.exports = generateMarkdown;
