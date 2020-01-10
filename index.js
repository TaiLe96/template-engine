const inquirer = require("inquirer");
const 

const manager = require();
const engineer = require();
const intern = require();

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
    
}