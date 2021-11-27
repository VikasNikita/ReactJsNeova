import logo from './logo.svg';
import './App.css';
import NavComponent from "./NavComponent";
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <NavComponent/>
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
