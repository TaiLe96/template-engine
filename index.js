const inquirer = require("inquirer");
const render = require()

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Make an empty array
const teamMembers = [];

// Function to create Manager
function createManager() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Input manager's name:",
        },
        {
            type: "input",
            name: "ID",
            message: "Input ID number:",
        },
        {
            type: "input",
            name: "email",
            message: "Input email:",
        },
        {
            type: "input",
            name: "office number",
            message: "Input office number",
        },
    ])
    // Function to push manager's data
    .then(function(input){
        const manager = new Manager(
            input.name,
            parseInt(input.id),
            input.email,
            parseInt(input.office),
        );
        teamMembers.push(manager);
        addMember();
    });
}
createManager();

// Function to add members
function addMember() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "role",
            message: "Select job position:",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add anymore member."
            ]
        }
    ])
// Function to push data
    .then(function(input){
        if (input.type === "Engineer") {
            createEngineer();
        } else if (input.type === "Intern") {
            createIntern();
        } else {
            render(teamMembers);
        }
    })
}

// Engineer
function createEngineer() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Input engineer's name:",
        },
        {
            type: "input",
            name: "ID",
            message: "Input ID number:",
        },
        {
            type: "input",
            name: "email",
            message: "Input engineer's email:",
        },
        {
            type: "input",
            name: "github",
            message: "Input engineer's GitHub:"
        }
    ])
    .then(function(input){
        const engineer = new Engineer(
            input.name,
            parseInt(input.id),
            input.email,
            input.github
        );
        teamMembers.push(engineer);
        addMember();
    })
}

// Intern
function createIntern() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Input intern's name",
        },
        {
            type: "input",
            name: "ID",
            message: "Input ID number:",
        },
        {
            type: "input",
            name: "email",
            message: "Input intern's email:",
        },
        {
            type: "input",
            name: "school",
            message: "Input engineer's school:",
        },
    ])
    .then(function(input){
        const intern = new Intern(
            input.name,
            praseInt(input.id),
            input.email,
            input.school,
        );
        teamMembers.push(intern);
        addMember();
    })
}