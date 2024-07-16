const { prompt } = require("inquirer");
//const express = require('express');
//const postgres = require('postgres');


    prompt([
        {
            type: 'list',
            message: 'Select from the following options',
            name: 'options',
            choices: ['view all depts', 'view all roles', 'view all employees', 'add a dept', 'add a role', 'add an employee', 'update employee role' ] 
        }
        

    ])
    .then