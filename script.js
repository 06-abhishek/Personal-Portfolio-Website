// Frontend :

let frontendProgress = "56%";  // Progress(%) of Frontend
let frontLanguages = "HTML, CSS, Bootstrap, Tailwind CSS & JavaScript"; // Change Frontend lamguages


let frontend = document.createElement("div");
document.querySelector(".progressBar").append(frontend);

let frontendText = document.createElement("span");
frontendText.innerHTML = "Frontend";
frontendText.setAttribute("style", "font-size: 12px; font-weight: 600;");
frontend.append(frontendText);

let frontendPerc = document.createElement("span");
frontendPerc.innerHTML = frontendProgress;
frontendPerc.setAttribute("style", "font-size: 12px; font-weight: 600; margin-left: 294px;");
frontend.append(frontendPerc);

let containerBar = document.createElement("div");
containerBar.setAttribute("class", "containerBar");
frontend.append(containerBar);

let bar = document.createElement("div");
bar.setAttribute("class", "bar");
bar.setAttribute("style", `width: ${frontendProgress}`);
containerBar.append(bar);

let frontendLang = document.createElement("span");
frontendLang.innerHTML = frontLanguages;
frontendLang.setAttribute("style", "font-size: 10px; font-weight: 600; margin-left: 143px;");
frontend.append(frontendLang);



// Backend :

let backendProgress = "20%";  // Progress(%) of Backend
let backendLangueages = "Node.js, Express JS (in Progress)"; // Change Backend lamguages


let backend = document.createElement("div");
backend.setAttribute("style", "margin-top: 30px;");
document.querySelector(".progressBar").append(backend);

let backendLable = document.createElement("span");
backendLable.innerHTML = "Backtend";
backendLable.setAttribute("style", "font-size: 12px; font-weight: 600;");
backend.append(backendLable);

let backendPerc = document.createElement("span");
backendPerc.innerHTML = backendProgress;
backendPerc.setAttribute("style", "font-size: 12px; font-weight: 600; margin-left: 294px;");
backend.append(backendPerc);

let containerBarBACK = document.createElement("div");
containerBarBACK.setAttribute("class", "containerBar");
backend.append(containerBarBACK);

let barBACK = document.createElement("div");
barBACK.setAttribute("class", "bar");
barBACK.setAttribute("style", `width: ${backendProgress}`);
containerBarBACK.append(barBACK);

let backendlang = document.createElement("span");
backendlang.innerHTML = backendLangueages;
backendlang.setAttribute("style", "font-size: 10px; font-weight: 600; margin-left: 221px;");
backend.append(backendlang);



// Database :

let dataProgress = "0%";  // Progress(%) of Database
let dataLanguages = ""; // Change Database languages


let data = document.createElement("div");
data.setAttribute("style", "margin-top: 30px;");
document.querySelector(".progressBar").append(data);

let dataLable = document.createElement("span");
dataLable.innerHTML = "Database";
dataLable.setAttribute("style", "font-size: 12px; font-weight: 600;");
data.append(dataLable);

let dataPerc = document.createElement("span");
dataPerc.innerHTML = dataProgress;
dataPerc.setAttribute("style", "font-size: 12px; font-weight: 600; margin-left: 294px;");
data.append(dataPerc);

let containerBarDATA = document.createElement("div");
containerBarDATA.setAttribute("class", "containerBar");
data.append(containerBarDATA);

let barDATA = document.createElement("div");
barDATA.setAttribute("class", "bar");
barDATA.setAttribute("style", `width: ${dataProgress}`);
containerBarDATA.append(barDATA);

let datalang = document.createElement("span");
datalang.innerHTML = dataLanguages;
datalang.setAttribute("style", "font-size: 10px; font-weight: 600; margin-left: 143px;");
data.append(datalang);





document.querySelectorAll(".scroll-Link").forEach( (anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        //const offset = 60;
        //const elementPosition = targetElement.offsetTop - offset;

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
});