import logo from "./logo.svg";
import "./App.css";
// import Flight from './Flight';
// import FlightComponent from './FlightComponent';
import ListDepartment from "./ListDepartment";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateDepartmentComponent from "./CreateDepartmentComponent";
function App() {
  return (
    <div>
      <HeaderComponent />
      <ListDepartment />
    </div>
  );
}

export default App;
