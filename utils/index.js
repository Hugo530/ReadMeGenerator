// Packages needed for this application
// generator is where generatemarkdown and its associated functions are located and is required to parse all of the data into the markdown format that makes the readme function and look nice
const generator = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require('fs');

// Questions for user input
const questions = [
  {
    type: "input",
    message: "What is your username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Write instructions for how to install your project:",
    name: "install",
  },
  {
    type: "input",
    message: "Write instructions for how to use your program:",
    name: "howtouse",
  },
  {
    type: "input",
    message: "What guidelines would you like the user to follow for contributions?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How should the user test your program?",
    name: "test",
  },
  {
    type: "list",
    message: "Which license are you using?",
    name: "license",
    choices: ["MIT","GPLv2","Apache"],
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  // parsedData puts everything generated by generateMarkdown into a template literal so that fs.writFile will accept it
    let parsedData = `${(generator.generateMarkdown(data))}`
  // fs.writefile creates the actual readme file based on the markdown created in generate markdown
  fs.writeFile(fileName, parsedData, (err) =>
  err ? console.error(err) : console.log('Success!'));
  // How do I use the markdown file here??
  // import markdown functions
}

// init kicks off the app by using inquirer to prompt the user to input the desired information from the questions array
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
        console.log("user responses", answers)
        writeToFile('ReadMe.md', answers);
    }

    );
}

// Function call to initialize app
init();