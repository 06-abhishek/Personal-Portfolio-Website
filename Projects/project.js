const projectData = [
    {
        img : "thumbnails/Personal Portfolio-Website-(HTML&CSS).png",
        projectLink : "#",
        name : "Personal Portfolio Website (HTML & CSS)",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laborum modjfh Explicabo quos expedita officiis. Qui quibusdam magnam, cum voluptas libero praesentium distinctio saepe, laborum animi deserunt voluptatibus! Minus.",
        problemsSolve : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laborum modi? Explicabo quos expedita officiis. Qui quibusdam magnam, cum voluptas libero praesentium distinctio saepe, laborum animi deserunt voluptatibus! Minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laborum modi? Explicabo quos expedita officiis. Qui quibusdam magnam, cum voluptas libero praesentium distinctio saepe, laborum animi deserunt voluptatibus! Minus.",
        languages : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laborum modi? Explicabo quos expedita officiis.",
        challenges : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laborum modi? Explicabo quos expedita officiis. Qui quibusdam magnam, cum voluptas libero praesentium distinctio saepe, laborum animi deserunt voluptatibus! Minus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laborum modi? Explicabo quos expedita officiis. Qui quibusdam magnam, cum voluptas libero praesentium distinctio saepe, laborum animi deserunt voluptatibus! Minus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laborum modi? Explicabo quos expedita officiis. Qui quibusdam magnam, cum voluptas libero praesentium distinctio saepe, laborum animi deserunt voluptatibus! Minus.",
        approach : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laborum modi? Explicabo quos expedita officiis. Qui quibusdam magnam, cum voluptas libero praesentium distinctio saepe, laborum animi deserunt voluptatibus! Minus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laborum modi? Explicabo quos expedita officiis. Qui quibusdam magnam, cum voluptas libero praesentium distinctio saepe, laborum animi deserunt voluptatibus! Minus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laborum modi? Explicabo quos expedita officiis. Qui quibusdam magnam, cum voluptas libero praesentium distinctio saepe, laborum animi deserunt voluptatibus! Minus."
    },
];


// project.html  starts from here :
if(window.location.href.includes("project.html")) {

    function project({img, projectLink, name, description, problemsSolve, languages, challenges, approach})
    {
        let container = document.createElement("div");
        container.setAttribute("class", "projectContainer");
        document.querySelector(".main").prepend(container);

        let card = document.createElement("div");
        card.setAttribute("class", "project-Card");
        container.append(card);

        let imageAnc = document.createElement("a");
        imageAnc.setAttribute("href", projectLink);
        card.append(imageAnc);
        let image = document.createElement("img");
        image.setAttribute("src", img);
        image.setAttribute("class", "projectIMG");
        imageAnc.append(image);

        let projectName = document.createElement("a");
        projectName.innerHTML = name;
        projectName.setAttribute("href", projectLink);
        projectName.setAttribute("class", "projectName");
        card.append(projectName);

        let ProjectDescription = document.createElement("p");
        ProjectDescription.innerHTML = description;
        ProjectDescription.setAttribute("class", "projectDescription");
        card.append(ProjectDescription);

        let projectProblemSolve = document.createElement("p");
        projectProblemSolve.innerHTML = problemsSolve;
        projectProblemSolve.setAttribute("class", "problems-Project-Solve");
        card.append(projectProblemSolve);
        let spanProb = document.createElement("span");
        spanProb.innerHTML = "Problem It Solves : ";
        spanProb.setAttribute("style", "font-weight: 600;");
        projectProblemSolve.prepend(spanProb);

        let projectLang = document.createElement("p");
        projectLang.innerHTML = languages;
        projectLang.setAttribute("class", "project-languages");
        card.append(projectLang);
        let spanLang = document.createElement("span");
        spanLang.innerHTML = "Technologies Used : ";
        spanLang.setAttribute("style", "font-weight: 600;");
        projectLang.prepend(spanLang);

        let projectChallenges = document.createElement("p");
        projectChallenges.innerHTML = challenges;
        projectChallenges.setAttribute("class", "project-challenges");
        card.append(projectChallenges);
        let spanChal = document.createElement("span");
        spanChal.innerHTML = "Challenges Faced : ";
        spanChal.setAttribute("style", "font-weight: 600;");
        projectChallenges.prepend(spanChal);

        let projectApproch = document.createElement("p");
        projectApproch.innerHTML = approach;
        projectApproch.setAttribute("class", "project-approach");
        card.append(projectApproch);
        let spanApp = document.createElement("span");
        spanApp.innerHTML = "How I Approached It : ";
        spanApp.setAttribute("style", "font-weight: 600;");
        projectApproch.prepend(spanApp);
    }

    
    projectData.forEach( (value) => {
        project(value);
    });
}



// works.html  starts from here :
else if(window.location.href.includes("works.html"))
{
    function projectInWork({img, projectLink, name, description, problemsSolve, languages, challenges, approach})
    {
        let container = document.createElement("div");
        container.setAttribute("class", "project-Container");
        document.querySelector(".projects").prepend(container);

        let card = document.createElement("div");
        card.setAttribute("class", "project-Card");
        container.append(card);

        let imageAnc = document.createElement("a");
        imageAnc.setAttribute("href", projectLink);
        card.append(imageAnc);
        let image = document.createElement("img");
        image.setAttribute("src", img);
        image.setAttribute("class", "projectIMG");
        imageAnc.append(image);

        let projectName = document.createElement("a");
        projectName.innerHTML = name;
        projectName.setAttribute("href", projectLink);
        projectName.setAttribute("class", "projectName");
        card.append(projectName);

        let ProjectDescription = document.createElement("p");
        ProjectDescription.innerHTML = description;
        ProjectDescription.setAttribute("class", "projectDescription");
        card.append(ProjectDescription);

        // let projectProblemSolve = document.createElement("p");
        // projectProblemSolve.innerHTML = problemsSolve;
        // projectProblemSolve.setAttribute("class", "problems-Project-Solve");
        // card.append(projectProblemSolve);
        // let spanProb = document.createElement("span");
        // spanProb.innerHTML = "Problem It Solves : ";
        // spanProb.setAttribute("style", "font-weight: 600;");
        // projectProblemSolve.prepend(spanProb);

        let projectLang = document.createElement("p");
        projectLang.innerHTML = languages;
        projectLang.setAttribute("class", "project-languages");
        card.append(projectLang);
        let spanLang = document.createElement("span");
        spanLang.innerHTML = "Technologies Used : ";
        spanLang.setAttribute("style", "font-weight: 600;");
        projectLang.prepend(spanLang);

        // let projectChallenges = document.createElement("p");
        // projectChallenges.innerHTML = challenges;
        // projectChallenges.setAttribute("class", "project-challenges");
        // card.append(projectChallenges);
        // let spanChal = document.createElement("span");
        // spanChal.innerHTML = "Challenges Faced : ";
        // spanChal.setAttribute("style", "font-weight: 600;");
        // projectChallenges.prepend(spanChal);

        // let projectApproch = document.createElement("p");
        // projectApproch.innerHTML = approach;
        // projectApproch.setAttribute("class", "project-approach");
        // card.append(projectApproch);
        // let spanApp = document.createElement("span");
        // spanApp.innerHTML = "How I Approached It : ";
        // spanApp.setAttribute("style", "font-weight: 600;");
        // projectApproch.prepend(spanApp);



        // let viewMoreBTN = document.createElement(".button");
        // viewMoreBTN.innerHTML = "View More";
        // viewMoreBTN.setAttribute("class", "viewMore");
        // document.querySelector(".projects").append(viewMoreBTN);
    }

    projectData.forEach( (value) => {
        projectInWork(value);
    });


    let projectLength = document.querySelectorAll(".project-Container").length;
    if (projectLength > 3) {
        for (let idx = 3; idx < projectLength; idx++) {
            document.getElementsByClassName("project-Container")[3].remove();
        }

        document.querySelector(".projects").insertAdjacentHTML("beforeend",
            '<a href="../Projects/project.html" class="viewMore"><i class="fa-solid fa-arrow-right"></i> View More</a>');
    }
}