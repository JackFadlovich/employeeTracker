// const express = require('express');
// const { Pool } = require('pg');

// const PORT = port.env.PORT || 3001;


// //middleware
// application.use(express.urlencoded({ extended: false}));
// application.use(express.json());

const pool = new pool( 

    user, 'postgres,',
    password, '12345',
    host, 'localhost',
    database, 'employees_db',

    
console.log('connected to db')
)

// pool.connect();