import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EmployeeService from "./EmployeeService";
const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const { id } = useParams();

  const FetchData = () => {
    EmployeeService.getAll().then((response) => {
      console.log("Printing the departments data", response.data);
      setDepartments(response.data);
    });
  };

  useEffect(() => {
    FetchData();
  }, []);

  const handleDelete = (id) => {
    console.log("printing Id", id);
    EmployeeService.remove(id).then((response) => {
      console.log("employee delete successfully", response.data);
      FetchData();
    });
  };

  return (
    <div>
      <h1> List of Department</h1>
      <Link className="btn btn-primary mb-2" to="/add-Department">
        Add Department
      </Link>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>DeptId</th>
            <th>DeptName</th>
            <th>DeptLocation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.deptId}</td>
              <td>{department.deptName}</td>
              <td>{department.deptLocation}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/add-Department/edit/${department.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger ml-2"
                  onClick={(event) => {
                    handleDelete(department.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
