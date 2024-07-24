const { prompt } = require("inquirer");
const { express } = require('express');
const { viewDept, viewRole, viewEmp, addDept, addRole, addEmp, updateEmp } = require('./queries.js');
const inquirer  = require('inquirer');
//const { postgres } = require('postgres');


const mainMenu = () => {
    prompt([
    {
        type: 'list',
        name: 'action',
        message: 'please select from the following options',
        choices: ['view all depts', 'view all roles', 'view all employees', 'add a dept', 'add a role', 'add an employee', 'update employee']
}


]).then((answer) => {
    switch (answer.action) {
        case 'view all depts':
            viewingDept();
            break;
        case 'view all roles':
            viewingRole();
            break;
        case 'view all employees':
            viewingEmp();
            break;
        case 'add a dept':
            addURMOM();
            break;
        case 'add a role':
            //console.log('amogus')
            roleAdding();
            break;
        case 'add an employee':
            empAdding();
            break;
        case 'update employee':
            empUpdate();
            break;
    }
}
)
}   


const viewingEmp =() => {
viewEmp().then(mainMenu)

}

const viewingDept =() => {
    viewDept().then(mainMenu)
}


const viewingRole =() => {
    viewRole().then(mainMenu)
}

const empUpdate =() => {
    const updatingEmp = [
        {
            type: 'input',
            name: 'employees',
            message: 'which employee would you like to update'

        },
        
        
        {
type: 'input',
name: 'role_id',
message: 'please enter the new role id'
        }
    ];

    inquirer.prompt(updatingEmp).then( (answers) => {

        const {employees, role_id} = answers;
    updateEmp (employees, role_id)
    }

).then(mainMenu)

}








const addURMOM =() => {
    const deptQuestions = [
    {
      type: 'input',
      name: 'dept',
      message: 'enter the name of the department you would like to add'
    }
      ];
    
    inquirer.prompt(deptQuestions).then( (answers) => {
        const {dept} = answers;
addDept (dept)
    }).then(mainMenu)
}





const roleAdding = () => {
    //console.log('sus')
    const roleQuestions = [
    //name , salary, dept
        {
          type: 'input',
          name: 'name',
          message: 'enter the name of the role'
        },
        {
          type: 'input',
          name: 'salary',
          message: 'enter the salary for this role'
        },
        {
          type: 'input',
          name: 'dept',
          message: 'what dept does this role belong in' 
        },
    ];
        inquirer.prompt(roleQuestions).then( async (answers) => {
          const { name, salary, dept} = answers
    
          await addRole(name, salary, dept)
        }).then(mainMenu) 
    }








const empAdding =() => {
    const empQuestions = [
    {
        type: 'input',
        name: 'first_Name',
        message: 'Enter their first name'
    },
    {
        type: 'input',
        name: 'last_Name',
        message: 'enter their last name'

    },
    {
        type: 'input',
        name: 'role_id',
        message: 'enter role id'

    },
    {
        type: 'input',
        name: 'manager_ID',
        message: 'Add the ID number of their manager'
    }
  ];
    inquirer.prompt(empQuestions).then(async(answers) =>{
      const { first_Name, last_Name, role_id, manager_ID } = answers 

       await addEmp (first_Name, last_Name, role_id, manager_ID)
    }).then(mainMenu)
}




mainMenu();

module.exports = {
    mainMenu
}