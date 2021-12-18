import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "use-hooks/dist/commonjs/use-history";
import EmployeeService from "./EmployeeService";

const AddDepartment = () => {
  const history = useHistory;
  const [deptName, setdeptName] = useState("");
  const [deptLocation, setdeptLocation] = useState("");
  const { id } = useParams();

  //   let history = useHistory();

  const saveDepartment = (event) => {
    event.preventDefault();

    const department = { deptName, deptLocation, id };
    if (id) {
      EmployeeService.update(department).then((response) => {
        console.log("Employee data updated successfully", response.data);
        alert("updated");
      });
    } else {
      EmployeeService.create(department).then((response) => {
        console.log("department added successfully", response.data);
        // history.push("/departmentList");
        alert("Added");
      });
    }
  };

  useEffect(() => {
    if (id) {
      EmployeeService.get(id).then((department) => {
        setdeptName(department.data.deptName);
        setdeptLocation(department.data.deptLocation);
      });
    }
  }, []);

  return (
    <>
      <h2>Add Department</h2>
      <hr />
      <form>
        <div className="col-md-4">
          <label>Department Name:</label>
          <input
            className="form-control"
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

          <Link to="/departmentList"> Back To List</Link>
        </div>
      </form>
    </>
  );
};
export default AddDepartment;
