import { useEffect, useState } from "react";
import { getDepartmentById, getDepartmentsList } from "./DepartmentSer";

export default () => {
  const [DeptList, setDeptList] = useState([]);

  useEffect(() => {
    getDepartmentsList().then((response) => {
      if (response && response.data) {
        setDeptList(response.data);
      }
    });
  }, []);

  const onGetDetailsClickHandler = (deptId) => {
    getDepartmentById(deptId).then((response) => {
      if (response && response.data) {
        alert("Name" + response.data.deptName);
      }
    });
  };
  return (
    <>
      <h1>Department </h1>
      <table className="table">
        <thead>
          <tr>
            <th>deptId</th>
            <th>DepartmentName</th>
            <th>Department Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {DeptList.map((department) => {
            <tr key={department.deptId}>
              <td>{department.deptName}</td>
              <td>{department.deptLocation}</td>
              <td>
                <button
                  onClick={() => {
                    onGetDetailsClickHandler(department.deptId);
                  }}
                >
                  GetDetail
                </button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
};
