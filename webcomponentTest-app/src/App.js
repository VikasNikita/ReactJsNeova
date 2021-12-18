import logo from "./logo.svg";
import "./App.css";
import UserDetails from "./UserDetails";
import UserDetailComponent from "./UserDetailComponent";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
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
      {/* <user-detail></user-detail>
        <h1>Hello </h1>
        <UserDetails />
      </header> */}
      <UserDetailComponent name={"nikita"} />
    </div>
  );
}

export default App;
