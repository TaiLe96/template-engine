const inquirer = require("inquirer");
const render = require()

const manager = require('./html/');
const engineer = require();
const intern = require();

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
        const manager = new manager(
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
            render
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
        const engineer = new engineer(
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
        const intern = new intern(
            input.name,
            praseInt(input.id),
            input.email,
            input.school,
        );
        teamMembers.push(intern);
        addMember();
    })
}