// src/Employees.jsx
import React from 'react';
import Employee from './Employee';

const Employees = () => {
  const employees = [
    { name: 'John Doe', position: 'Manager', salary: 50000, status: 'Active' },
    { name: 'Jane Smith', position: 'Developer', salary: 40000, status: 'Active' },
    { name: 'Mary Johnson', position: 'Designer', salary: 35000, status: 'Not Active' },
    { name: 'James Wilson', position: 'Developer', salary: 45000, status: 'Active' },
    { name: 'Patricia Brown', position: 'Manager', salary: 55000, status: 'Active' },
    { name: 'Michael Davis', position: 'Designer', salary: 38000, status: 'Not Active' },
    { name: 'Linda Martinez', position: 'Developer', salary: 42000, status: 'Active' },
    { name: 'Robert Garcia', position: 'Manager', salary: 53000, status: 'Active' },
    { name: 'David Hernandez', position: 'Developer', salary: 46000, status: 'Active' },
    { name: 'Sarah Lewis', position: 'Designer', salary: 37000, status: 'Active' }
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Employee Names</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Employee
              key={index}
              no={index + 1}
              name={employee.name}
              position={employee.position}
              salary={employee.salary}
              status={employee.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
