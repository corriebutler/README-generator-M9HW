// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'Apache 2.0'){
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GPLv2'){
    badge = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }
  if (license === 'GPLv3'){
    badge = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0'
  }
  if (license === 'MIT'){
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  This project uses 
  ## Table of Contents
  - [Description of Project](#projectDescription)
  - [Visuals](#projectVisuals)
  - [Programming Languages Used](#projectScripts)
  - [Project Usage](#projectUsage)
  - [How can you contribute?](#projectContribution)
  - [How to Install](#projectInstallation)
  - [Tests](#projectTests)
  - [GitHub Repo](#githubUser)
  - [Questions](#projectQuestions)

  ## Description of Project
  ${data.projectDescription}

  ## Visuals
  *Add Visuals Here*

  ## Languages Used
  ${data.projectScripts}

  ## Project Usage
  ${data.projectUsage}

  ## How can you Contribute?
  ${data.projectContribution}

  ## How to Install
  ${data.projectInstallation}

  ## Tests
  ${data.projectTests}

  ## GitHub Repo
  (https://github.com/${data.githubUser})

  ## Questions
  [Contact User](mailto:${data.projectQuestions})
`;
}

module.exports = generateMarkdown;
