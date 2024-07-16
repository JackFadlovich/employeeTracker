const { prompt } = require("inquirer");
//const express = require('express');
//const postgres = require('postgres');


// //Syntax for switch statments
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }



    prompt([
        {
            type: 'list',
            message: 'Select from the following options',
            name: 'options',
            choices: ['view all depts', 'view all roles', 'view all employees', 'add a dept', 'add a role', 'add an employee', 'update employee role' ] 
        }
        

    ])
    .then
        switch(options) {


        }