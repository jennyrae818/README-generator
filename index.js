const inquirer = require('inquirer');
const fs = require('fs');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Give your project a title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe the project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions:',
    },  {
      type: 'input',
      name: 'usage',
      message: 'Usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Describe how someone can contribute:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Describe testing here:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ["None", "Apache-License_2.0", "GNU-General-Public-License_v3.0", "MIT-License", 'BSD-2_Clause-"Simplified"-License', 
      'BSD-3_Clause-"New"-or-"Revised"-License', "Boost-Software-License_1.0", "Creative-Commons-Zero_v1.0-Universal", "Eclipse-Public-License_2.0",
      "GNU-Affero-General-Public-License_v3.0", "GNU-General-Public-License_v2.0", "GNU-Lesser-General-Public-License_v2.1", "Mozilla-Public-License_2.0", "The Unlicense"]
    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'Enter the file path to screenshots here (example: eventplanner.png):',
      },
    {
      type: 'input',
      name: 'url',
      message: 'Enter the Url link to the site:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter the Github link:',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
  ]);
};

const generateREADME = ({ title, description, installation, usage, contribution, tests, url, github, license, screenshots, name, email }) =>
  `#Project Title
    ##Project ${title}

    ##Table of Contents 

    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [How to Contribute](#how-to-contribute)
    * [Tests](#tests)
    * [LinkToSite](#LinkToSite)
    * [Questions](#questions)

    ##Description
    ${description}

    ##Installation
    ${installation}

    ##Usage
    ${usage}

    ##Contribution Guidelines
    ${contribution}

    ##Tests
    ${tests}

    ##License
    ${title} is available under the ${license}
    
    ##Screenshots
    ![${screenshots}](${screenshots})

    ##Links
    Link to site: <${url}>
    Github link: <${github}>

    ##Questions
    If you have any questions please email ${name} directly at ${email}.
    `;


const init = () => {
  promptUser()
  
    .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md!'))
    .catch((err) => console.error(err));
};

init();