import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <>
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to={"departmentList"}
          ></Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to={"notfound"}
          ></Link>
        </li>

        {/* <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to={"./adddepartment"}
          ></Link>
        </li> */}
      </>
    );
  }
}

export default NavBar;
