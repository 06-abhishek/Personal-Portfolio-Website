// Technical Skills :
function technicalSkills(titleForTechSkills, infoForTechSkills) {
    let skillContainer = document.createElement("div");
    skillContainer.setAttribute("class", "Technical-Skill");
    document.querySelector(".skills").append(skillContainer);

    let skillTitle = document.createElement("h4");
    skillTitle.innerHTML = "&bull; " + titleForTechSkills;
    skillTitle.setAttribute("class", "title");
    skillContainer.append(skillTitle);

    let skillInfo = document.createElement("p");
    skillInfo.innerHTML = infoForTechSkills;
    skillContainer.append(skillInfo);
}
technicalSkills("Frontend", "HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, Next JS, React JS, TypeScript, Angular JS, Vue JS");
technicalSkills("Backend", "Node.JS, Express.JS, Typescript, PHP, Next JS, Vercel");
technicalSkills("Database", "MySQL, MongoDB, PostgreSQL");
technicalSkills("DevOps", "Docker, Kubernetes, AWS, Jenkins, Ansible");


//---------------------------------------------------------------------------------------------------------




// Projects :
function projects(titleForProjects, linkForProjects, infoForProjects) {
    let projectContainer = document.createElement("div");
    projectContainer.setAttribute("class", "My-Projects");
    document.querySelector(".projects").append(projectContainer);

    let projectTitle = document.createElement("h4");
    projectTitle.innerHTML = "&bull; " + titleForProjects;
    projectTitle.setAttribute("class", "title");
    projectContainer.append(projectTitle);

    let githubLinkInProject = document.createElement("a");
    githubLinkInProject.innerHTML = "(github)";
    githubLinkInProject.setAttribute("href", linkForProjects);
    projectTitle.append(githubLinkInProject);

    let projectInfo = document.createElement("p");
    projectInfo.innerHTML = infoForProjects;
    projectContainer.append(projectInfo);
}
projects("Image Compressor", "#", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae culpa, distinctio inventore excepturi ipsum ullam asperiores voluptatibus animi quam facilis amet accusantium quis cupiditate esse ad odit similique. Nesciunt!");
projects("Weather Report App", "#", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae culpa, distinctio inventore excepturi ipsum ullam asperiores voluptatibus animi quam facilis amet accusantium quis cupiditate esse ad odit similique. Nesciunt!");
projects("Cloud Point", "#", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae culpa, distinctio inventore excepturi ipsum ullam asperiores voluptatibus animi quam facilis amet accusantium quis cupiditate esse ad odit similique. Nesciunt!");


//---------------------------------------------------------------------------------------------------------



// Experience :
function experience(compony, roll, period, infoForExperience) {
    let experienceContainer = document.createElement("div");
    experienceContainer.setAttribute("class", "My-Experience");
    document.querySelector(".experience").append(experienceContainer);

    let experienceTitle = document.createElement("h4");
    experienceTitle.innerHTML = "&bull; " + compony + " | " + roll;/* + " | " + period;*/
    experienceTitle.setAttribute("class", "title");
    experienceContainer.append(experienceTitle);

    let experiencePeriod =document.createElement("span");
    experiencePeriod.innerHTML = `(${period})`;
    experiencePeriod.setAttribute("class", "period");
    experienceTitle.append(experiencePeriod);

    let experienceInfo = document.createElement("p");
    experienceInfo.innerHTML = infoForExperience;
    experienceContainer.append(experienceInfo);
}
experience("Microsoft India (R&D), Hyderabad", "Software Engineer Intern", "May'24-Jul24", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae culpa, distinctio inventore excepturi ipsum ullam asperiores voluptatibus animi quam facilis amet accusantium quis cupiditate esse ad odit similique. Nesciunt!");
experience("Google LLC, Asia Pacific", "Software Product Sprint", "Oct'24-Jan'25", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae culpa, distinctio inventore excepturi ipsum ullam asperiores voluptatibus animi quam facilis amet accusantium quis cupiditate esse ad odit similique. inventore excepturi ipsum ullam asperiores voluptatibus animi quam facilis amet accusantium quis cupiditate esse ad odit similique Nesciunt!");
experience("Defence Research & Development Organization, Delhi", "Research Trainee", "Apr'25-Jul25", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae culpa, distinctio inventore excepturi ipsum ullam asperiores voluptatibus animi quam facilis amet accusantium quis cupiditate esse ad odit similique. Nesciunt! ipisicing elit. Soluta recusandae culpa, distinctio inventore excepturi ipsum ullam asperiores voluptatibus animi quam facilis amet accusantium quis cupiditate esse ad odit similique. Nesciunt!");