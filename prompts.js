const { prompt, default: inquirer } = require("inquirer");
const { express } = require('express');
const { viewDept, viewRole, viewEmp } = require('./queries.js');
//const { postgres } = require('postgres');


const mainMenu = () => {
    prompt([
    {
        type: 'list',
        name: 'action',
        message: 'please select from the following options',
        choices: ['view all depts', 'view all roles', 'view all employees', 'add a dept', 'add a role', 'add an employee', 'update employee role']
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
            addDept()
            break;
        case 'addRole':
            addRole()
            break;
        case 'addEmp':
            addEmp()
            break;
        case 'updateEmpRole':
            updateEmpRole()
            break;
    }
}
)
}
    

mainMenu();

