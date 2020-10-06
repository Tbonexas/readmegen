function generateMarkdown(data, githubInfo) {
    return `
  # **${data.title}**
  ## Description 
  ${data.description}
  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Licence](#Licence)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
  ## Installation
  ${data.installation}
  ## Licence
  ${data.licence}
  ## Repository
  - [Project Repo](${data.repo})
  ## GitHub
  ![Image of me](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [GitHub Profile](${githubInfo.profile})
  - <${githubInfo.email}>
  `;
  }
  
  module.exports = generateMarkdown;