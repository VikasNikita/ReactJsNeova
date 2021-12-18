// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import NameList from "./NameList";
// import Department from "./DepartmentList";
import DepartmentList from "./DepartmentList";
import NotFound from "./NotFound";
import AddDepartment from "./AddDepartment";
import Department from "./Department";

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
      {/* <div>
        <Routes>
          <Route exact path="/departmentList" element={<DepartmentList />} />
          <Route path="/add-Department" element={<AddDepartment />} />
          <Route path="/add-Department/edit/:id" element={<AddDepartment />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </div> */}
      {/* <Department /> */}
    </div>
  );
}

export default App;
