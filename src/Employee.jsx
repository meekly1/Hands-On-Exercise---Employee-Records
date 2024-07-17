// src/Employee.jsx
import React from 'react';

const Employee = ({ no, name, position, salary, status }) => {
  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>{status === 'Active' ? `₱${salary}` : 'N/A'}</td>
      <td>{status}</td>
    </tr>
  );
};

export default Employee;
