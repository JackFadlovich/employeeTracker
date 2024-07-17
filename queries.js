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
        const { rows } = await pool.query("SELECT * FROM employees");
        console.log(rows)

  };

  viewEmp();