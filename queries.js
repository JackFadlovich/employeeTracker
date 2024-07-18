const { Pool } = require('pg');


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






module.exports = { 
  viewEmp, 
  viewRole,
  viewDept
}

