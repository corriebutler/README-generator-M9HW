// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

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
