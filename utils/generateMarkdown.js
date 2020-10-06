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
  - [GitHub Information](#GitHub) 
  ## Installation
  ${data.installation}
  ## Licence
  ${data.licence}
  ## Repository
  - [Project Repo](${data.repo})
  ## GitHub - Tbonexas
  ![Image of me](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [GitHub Profile](${githubInfo.profile})
  - [My Email](${githubInfo.email})`;
  }
  
  module.exports = generateMarkdown;