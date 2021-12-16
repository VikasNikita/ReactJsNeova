import { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "./EmployeeService";
// import { useHistory } from "react-router-dom";
// import UseHook from "usehook";

const AddDepartment = () => {
  const [deptName, setdeptName] = useState("");
  const [deptLocation, setdeptLocation] = useState("");
  //   const location = useLocation();

  //   let history = useHistory();

  const saveDepartment = (event) => {
    event.preventDefault();

    const department = { deptName, deptLocation };

    EmployeeService.create(department).then((response) => {
      console.log("department added successfully", response.data);
      //   location.push("/departmentList");
      alert("Added");
    });
  };
  return (
    <>
      <h2>Add Department</h2>
      <hr />
      <form>
        <div className="col-md-4">
          <label>Department Name:</label>
          <input
            className="form-control"
            // type="text"
            id="deptName"
            value={deptName}
            onChange={(event) => {
              setdeptName(event.target.value);
            }}
            placeholder="Enter Department Name"
          />
        </div>
        <div className="form-group" className="col-md-4">
          <label>Department Location</label>
          <input
            className="form-control"
            id="deptLocation"
            value={deptLocation}
            onChange={(event) => {
              setdeptLocation(event.target.value);
            }}
            placeholder="Enter Department Location"
          />
        </div>
        <br />
        <div>
          <button
            className="btn btn-primary"
            onClick={(event) => {
              saveDepartment(event);
            }}
          >
            Submit
          </button>
          {/* <Link className="btn btn-primary" to={"departmentList"}>
            Go To List
          </Link> */}
          <Link to="/departmentList"> Back To List</Link>
        </div>
      </form>
    </>
  );
};
export default AddDepartment;
