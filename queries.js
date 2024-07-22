const { default: inquirer } = require('inquirer');

const { Pool, Connection } = require('pg');


// pool (connect);
const pool = new Pool(
    {
      // TODO: Enter PostgreSQL username
      user: 'postgres',
      // TODO: Enter PostgreSQL password
      password: '12345',
      host: 'localhost',
      database: 'employees_db'
    },
    console.log(`Connected to database.`)
  )
  pool.connect();


  //view functions
  const viewEmp =  async () => {
        const { rows } = await pool.query("SELECT * FROM EMPLOYEES");
        console.log(rows)

  };

const viewRole = async () => {
  const { rows } = await pool.query("SELECT * FROM ROLES")
  console.log(rows)

};


const viewDept = async () => {
  const { rows } = await pool.query("SELECT * FROM DEPARTMENTS")
  console.log(rows)
};



//add fuctions

const addEmp = () => {
  const empQuestions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Enter their first name'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'enter their last name'

    },
    {
        type: 'input',
        name: 'salary',
        message: 'enter their salary'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Add the ID number of their manager'
    }
  ];
    inquirer.prompt(empQuestions).then((answers) =>{
      const { firstName, lastName, salary, managerID } = empQuestions; 


      const query = ' INSERT INTO  employees ( firstName, lastName, salary, managerID) VALUES ( ?, ?, ?,)';
      Connection.query(query, [firstName, lastName, salary, managerID], (err, results) => {

          if (err) throw err;
          console.log('Data inserted successfully:', results);
      }

      
      )

    mainMenu();
    }
  )
};

const addRole = () => {
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

    inquirer.prompt(roleQuestions).then((answers) => {
      const { name, salary, dept } = roleQuestions


      const query = 'INSERT INTO roles ( name, salary, dept) VALUES (?, ?, ?)';
      Connection.query(query, [ name, salary, dept], (err, results) =>
      {
          if (err) throw err;
          console.log('data inserted succesfully');


          mainMenu();
      }
      )
    }
  )
  ]
};


const addDept = () => {
  const deptQuestions = [
{
  type: 'input',
  name: 'dept',
  message: 'enter the name of the department you would like to add'
}
  ];

inquirer.prompt(deptQuestions).then((answers) => {
    const {dept} = answers;

    const query = 'INSERT INTO departments (name) VALUES ($1)';
    pool.query(query, [dept], (err, res) =>
    {
      if (err) throw err;
      console.log('data inserted succesfully');

      mainMenu();
    }


    )
  }
  )

}





module.exports = { 
  viewEmp, 
  viewRole,
  viewDept,
  addEmp,
  addRole,
  addDept
}

