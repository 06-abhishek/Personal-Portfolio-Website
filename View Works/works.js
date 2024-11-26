// Case Studies :
const caseStudiesData = [
    {
        question: "Write a function to perform a deep clone of a given object, including handling nested objects and arrays.",
        questionOverview: "Cloning objects is a common task in JavaScript, especially when we want to avoid modifying the original object. While shallow cloning methods like Object.assign() or spread syntax only copy the top-level properties, deep cloning creates a complete copy of an object including nested objects and arrays.",
        myStrategy: "- Handle both arrays and objects by recursively traversing through their properties.\n- Return primitive values as is since they don’t require deep copying.\n- Implement a recursive function that checks each property and makes a copy at every level.",
        challengesFaced: "- Shallow copy methods don’t handle nested objects, so modifying the copy still affects the original object.\n- Handling both arrays and objects consistently requires careful conditional checks.\n- Stack overflows could happen if the object is too deeply nested without proper recursive handling.",
        solutionIMG: "1.png",
        learnings: "- Deep copying objects ensures that nested objects are not inadvertently modified.\n- Recursion is key to handle arbitrarily deep structures in arrays and objects.\n- Implementing a manual deep clone allows more control compared to JSON.stringify().",
        result: "The function successfully creates a deep clone of complex objects. Changes made to the cloned object do not affect the original, ensuring a clean separation between copies.",
        sourceCode : "#"
    },
    {
        question: "Write a memoization function that optimizes another function by caching its results.",
        questionOverview: "Memoization is a common optimization technique that improves performance by caching results of expensive function calls and returning the cached result when the same inputs occur again.",
        myStrategy: "- Use a cache object to store previously computed results.\n- Convert function arguments into a unique key for the cache.\n- Return the cached result if the key is already present, otherwise, compute and store it.",
        challengesFaced: "- Generating a unique and reliable key from function arguments.\n- Handling functions with multiple arguments or non-primitive types (arrays, objects) as inputs.\n- Managing the cache to avoid excessive memory usage for highly repetitive calls.",
        solutionIMG: "2.png",
        learnings: "- Memoization helps significantly improve performance, especially for expensive computations.\n- JSON.stringify is useful for converting arguments to unique keys but might not handle functions or other complex types well.\n- The cache can grow indefinitely, so proper cache management is necessary for long-running applications.",
        result: "Memoized functions run efficiently, only performing the computation once for a given set of arguments. Subsequent calls with the same arguments return the result instantly from the cache.",
        sourceCode : "#"
    },
    {
        question: "Write a throttle function that ensures a given function is only called once every n milliseconds, no matter how often it's invoked.",
        questionOverview: "Throttle ensures that a function is invoked at most once during a specified time interval, which is useful for performance-heavy operations like scrolling or resizing that trigger events repeatedly in a short span of time.",
        myStrategy: "- Use a flag (inThrottle) to determine if the function can be called.\n- When the function is called, it immediately runs if not throttled and sets the flag.\n- Reset the flag after the throttle interval using setTimeout.",
        challengesFaced: "- Managing the timing accurately so that the function is invoked at the correct intervals.\n- Ensuring the last event gets captured if the throttle period ends after the event.\n- Avoiding over-throttling, where events are missed due to excessive throttling.",
        solutionIMG: "3.png",
        learnings: "- Throttling helps improve performance by reducing the frequency of function calls during high-activity events like scrolling.\n- Managing timing and ensuring the function still works correctly within the throttled interval requires careful planning.\n- Throttling is different from debouncing, which only triggers a function after a specified delay.",
        result: "The throttled function is only called once every specified interval, leading to smoother performance in scenarios like scrolling without overloading the browser with too many function calls.",
        sourceCode : "#"
    },
    {
        question: "Write a function that mimics the behavior of Promise.all(), which accepts an array of promises and resolves once all of them are resolved, or rejects if any one of them rejects.",
        questionOverview: "Promise.all() is a utility in JavaScript for handling multiple asynchronous operations concurrently. It returns a single promise that resolves when all the input promises resolve or rejects if any of them fail.",
        myStrategy: "- Use an array to store results of promises.\n- Use a counter to track the completion of all promises.\n- Handle rejections immediately by rejecting the whole promise as soon as one fails.",
        challengesFaced: "- Managing the order of resolved promises to match the input order.\n- Making sure that the function handles both synchronous and asynchronous promises correctly.\n- Ensuring that any rejection halts the entire process and prevents further resolutions.",
        solutionIMG: "4.png",
        learnings: "- Promise.all() is critical for managing multiple async operations efficiently.\n- Handling both synchronous and asynchronous promises in the same function requires ensuring that synchronous values are correctly wrapped in promises.\n- Rejecting the whole batch on the first error is a behavior that simplifies failure management.",
        result: "The function correctly resolves or rejects based on the input promises, maintaining the order of the results and handling failures as expected.",
        sourceCode : "#"
    }
];

function caseStudies({question, questionOverview, myStrategy, challengesFaced, solutionIMG, learnings, result, sourceCode})
{
    let caseStudiesContainer = document.querySelector(".caseStudiesContainer");

    let problemContainer = document.createElement("div");   // div .problemContainer
    problemContainer.setAttribute("class", "problemContainer");
    caseStudiesContainer.prepend(problemContainer);

    let problem = document.createElement("h4"); // h4 .question
    problem.innerHTML = "&bull; Que. - " + question;
    problem.setAttribute("class", "question");
    problemContainer.append(problem);

    let problemOverview = document.createElement("p");  // p .questionOverview
    problemOverview.innerHTML = "<b>&bull; Overview - </b>" + questionOverview;
    problemOverview.setAttribute("class", "questionOverview");
    problemContainer.append(problemOverview);

    let problemstrategy = document.createElement("p");  // p .myStrategy
    problemstrategy.innerHTML = "<b>&bull; Strategy - </b>" + myStrategy;
    problemstrategy.setAttribute("class", "myStrategy");
    problemContainer.append(problemstrategy);

    let problemChallenges = document.createElement("p");    // p .challengesFaced
    problemChallenges.innerHTML = "<b>&bull; Challenges Faced - </b>" + challengesFaced;
    problemChallenges.setAttribute("class", "challengesFaced");
    problemContainer.append(problemChallenges);

    let imgContainer = document.createElement("span");  // span .imgContainer
    imgContainer.setAttribute("class", "imgContainer");
    problemContainer.append(imgContainer);
    let solutionHeading = document.createElement("p");  // p for Soluiton Heading
    solutionHeading.innerHTML = "<b>&bull; Solution -</b>";
    imgContainer.append(solutionHeading);
    let problemImage = document.createElement("img");   // img .solution
    problemImage.setAttribute("src", solutionIMG);
    problemImage.setAttribute("alt", "Solution of question.");
    problemImage.setAttribute("class", "solution");
    imgContainer.append(problemImage);

    let learningsFromProblem = document.createElement("p"); // p .learnings
    learningsFromProblem.innerHTML = "<b>&bull; Learnings - </b>" + learnings;
    learningsFromProblem.setAttribute("class", "learnings");
    problemContainer.append(learningsFromProblem);

    let problemResult = document.createElement("p");    // p .result
    problemResult.innerHTML = "<b>&bull; Result - </b>" + result;
    problemResult.setAttribute("class", "result");
    problemContainer.append(problemResult);

    let githubCode = document.createElement("a");
    githubCode.innerHTML = "- Source Code (github)"
    githubCode.setAttribute("href", sourceCode);
    githubCode.setAttribute("class", "sourceCode");
    problemContainer.append(githubCode);
}

caseStudiesData.forEach( (value) => {
    caseStudies(value);
});



// Portfolio Showcase :
let PortfolioShowcaseData = [
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    },
    {
        title : "Got the certificate in JavaScript!",
        img : "1.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur vel rerum nemo omnis corrupti corporis saepe eveniet soluta iusto eligendi quis sapiente temporibus aliquam hic accusantium sed perspiciatis iste."
    }
];

function portfolioShowcase({title, img, description})
{
    showcaseContainer = document.querySelector(".PortfolioShowcaseContainer");

    let Showcase = document.createElement("div");
    Showcase.setAttribute("class", "showcase");
    showcaseContainer.prepend(Showcase);

    let  titleOfShowcase = document.createElement("h4");
    titleOfShowcase.innerHTML = "&bull; " + title;
    titleOfShowcase.setAttribute("class", "titleShowcase");
    Showcase.append(titleOfShowcase);

    let imgOfShowcase = document.createElement("img");
    imgOfShowcase.setAttribute("src", img);
    imgOfShowcase.setAttribute("alt", "Image of Portfolio Showcase");
    imgOfShowcase.setAttribute("class", "imgShowcase");
    Showcase.append(imgOfShowcase);

    let descriptionOfShowcase = document.createElement("p");
    descriptionOfShowcase.innerHTML = description;
    descriptionOfShowcase.setAttribute("class", "descriptionShowcase");
    Showcase.append(descriptionOfShowcase);
}
PortfolioShowcaseData.forEach( (value) => {
    portfolioShowcase(value);
})



// Jump to Top button :
let jumpBTN = document.querySelector(".jumpToTop");

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        jumpBTN.style.display = "block";
    }
    else {
        jumpBTN.style.display = "none";
    }
}

jumpBTN.onclick = function() {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    });
}