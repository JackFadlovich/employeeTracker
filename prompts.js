const { prompt } = require("inquirer");
const { express } = require('express');
const { viewDept, viewRole, viewEmp, addDept, addRole, addEmp } = require('./queries.js');
const inquirer  = require('inquirer');
//const { postgres } = require('postgres');


const mainMenu = () => {
    prompt([
    {
        type: 'list',
        name: 'action',
        message: 'please select from the following options',
        choices: ['view all depts', 'view all roles', 'view all employees', 'add a dept', 'add a role', 'add an employee']
}


]).then((answer) => {
    switch (answer.action) {
        case 'view all depts':
            viewDept();
            break;
        case 'view all roles':
            viewRole();
            break;
        case 'view all employees':
            viewEmp()
            break;
        case 'add a dept':
            addURMOM()
            break;
        case 'add a Role':
            addRole()
            break;
        case 'add an employee':
            addEmp()
            break;
    }
}
)
}   






const addURMOM =() => {
    const deptQuestions = [
    {
      type: 'input',
      name: 'dept',
      message: 'enter the name of the department you would like to add'
    }
      ];
    
    inquirer.prompt(deptQuestions).then((answers) => {
        const {dept} = answers;
addDept (dept)
    }).then(mainMenu)
}







mainMenu();

module.exports = {
    mainMenu
}