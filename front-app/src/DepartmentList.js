import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "./EmployeeService";
const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    EmployeeService.getAll().then((response) => {
      console.log("Printing the departments data", response.data);
      setDepartments(response.data);
    });
    // .catch (error => {
    //     console.log("Something went wrong",error)
    // })
  }, []);

  return (
    <div>
      <h1> List of Department</h1>
      <Link className="btn btn-primary mb-2" to="/addDepartment">
        Add Department
      </Link>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>DeptId</th>
            <th>DeptName</th>
            <th>DeptLocation</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.deptId}</td>
              <td>{department.deptName}</td>
              <td>{department.deptLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
