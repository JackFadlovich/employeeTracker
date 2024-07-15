DROP DATABASE IF EXISTS employees_db

CREATE DATABASE employees_db

-- Department catagories
INSERT department (id, name) values

(1, 'Engineering'),
(2, 'Finance'),
(3, 'Legal'),
(4, 'Sales');

-- Roles
INSERT roles (id, title, department_id, salary) values

(1, 'Sales Lead', 4, 100000),
(2, 'Sales Person', 4, 80000),
(3, 'Lead Engineer', 1, 150000),
(4, 'Saftware Engineer', 1, 120000),
(5, 'Acount Manager', 2, 160000),
(6, 'Accountant', 2, 125000),
(7, 'Legal Team Lead', 3, 250000 ),
(8, 'Lawyer', 3, 190000);

-- Employees
INSERT employees (id, first_name, last_name, role_id, manager_id) values

(1, 'John', 'Doe', 1, null ),
(2, 'Mike', 'Chan', 2, 1),
(3, 'Ashley', 'Rodriguez', 3, null),
(4, 'Kevin', 'Tupik', 4, 3),
(5, 'Kunal', 'Singh', 5, null),
(6, 'Malia', 'Brown', 6, 5),
(7, 'Sarah', 'Lourd', 7, null),
(8, 'Tom', 'Allen', 8, 7);
