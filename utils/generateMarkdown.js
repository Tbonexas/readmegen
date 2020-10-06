function generateMarkdown(data, githubInfo) {
    return `
    # **${data.title}**
  
  ## Description 
  
  ${data.description}
  
  ## Table of contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Repository Link](#Repository)
  - [GitHub Information](#GitHub)
  - [Contributors](#Contributors) 
 
  ## Installation
 
   ${data.installation}

   ## Usage
    
   ${data.usage} 

   ## Licence
  
   ${data.licence}
  
   ## Repository
  
   - [Project Repo](${data.repo})
  
  ## GitHub - Tbonexas
  
  ![Image of me](${githubInfo.githubImage})
  
  - ${githubInfo.name}
  
  - [GitHub Profile](${githubInfo.profile})
          <${githubInfo.email}>
  ## Contributors
  ${data.contributing}        
  `;
  }
  
  module.exports = generateMarkdown;