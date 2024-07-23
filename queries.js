const inquirer  = require('inquirer');

const { Pool, Connection } = require('pg');

const {mainMenu} = require('./prompts.js')

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

        //mainMenu();

  };

const viewRole = async () => {
  const { rows } = await pool.query("SELECT * FROM ROLES")
  console.log(rows)

  //mainMenu();

};


const viewDept = async () => {
  const { rows } = await pool.query("SELECT * FROM DEPARTMENTS")
  console.log(rows)

 mainMenu();
};



//add fuctions

const addEmp = async (first_Name, last_Name, role_id, manager_ID) => {
  

      const query = ' INSERT INTO employees ( first_Name, last_Name, role_id, manager_ID) VALUES ( $1, $2, $3, $4)';
      await pool.query(query, [first_Name, last_Name, role_id, manager_ID]), (err, results) => {

          if (err) throw err;
          console.log('Data inserted successfully:', results);
      }

      
      

   // mainMenu();
    }
//   )
// };

const addRole = async (title, salary, dept) => {

      const query = 'INSERT INTO roles ( title, salary, department_id) VALUES ( $1, $2, $3 )';
      await pool.query(query, [title, salary, dept]);
      console.log('data inserted sucessfully')

      // pool.query(query, [ name, salary, dept], (err, results) =>
      // {
      //     if (err) throw err;
      //     console.log('data inserted succesfully');


      //    // mainMenu();
      // }
      // )
    }
//   )
//   ]
// };


const addDept = (dept) => {


    const query = 'INSERT INTO departments (name) VALUES ($1)';
    pool.query(query, [dept], (err, res) =>
    {
      if (err) throw err;
      console.log('data inserted succesfully');

    //mainMenu();
    }


    )
  }
  //)

//}





module.exports = { 
  viewEmp, 
  viewRole,
  viewDept,
  addEmp,
  addRole,
  addDept
}

