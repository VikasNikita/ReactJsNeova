// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import NameList from "./NameList";
// import Department from "./DepartmentList";
import DepartmentList from "./DepartmentList";
import NotFound from "./NotFound";
import AddDepartment from "./AddDepartment";

function App() {
  return (
    <div className="container">
      {/* <header className="App-header"> */}
      {/* <NameList/> */}
      {/* <DepartmentList /> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      <div>
        <Routes>
          <Route exact path="/departmentList" element={<DepartmentList />} />
          <Route path="/addDepartment" element={<AddDepartment />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
