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
  - [Project Usage](#projectUsage)
  - [Contributing to this Project](#projectContribution)
  - [How to Install](#projectInstallation)
  - [Tests](#projectTests)
  - [GitHub Repo](#githubUser)
  - [Questions](#projectQuestions)

  ## Description of Project
  ${data.projectDescription}

  ## Visuals
  *Add Visuals Here*

  

`;
}

module.exports = generateMarkdown;
