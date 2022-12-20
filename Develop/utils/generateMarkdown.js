function generateReadMe(input) {
  return `
  
# ${input.title}

[![License: ${encodeURIComponent(input.license)}](https://img.shields.io/badge/License-${encodeURIComponent(input.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(input.license)})



## Description

${input.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following commands. ${input.installation}

## Usage

${input.usage}

## License

This project is licensed under the ${input.license}. For license notice, please click on the license badge at the top of this readme file or here: [![License: ${encodeURIComponent(input.license)}](https://img.shields.io/badge/License-${encodeURIComponent(input.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(input.license)})


## Contributing

${input.contributing}

## Tests

${input.test}

## Questions

If you have any other questions, please reach out via ${input.email} or visit my GitHub account (https://www.github.com/${input.gitHub}).

`;
}

module.exports = generateReadMe;
