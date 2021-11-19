// import logo from './logo.svg';
import MyFirstComponent from "./MyFirstComponent";
import MySecondComponent from "./MySecondComponent";

import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
    const  name="Ankit";
   return (<div> <h2>Hello {name && name.length  ? name : "World" } </h2>
             <MyFirstComponent name={name} age={25}/>
              <MySecondComponent name={name} age={25}/>
   </div>
   );
}

export default App;
