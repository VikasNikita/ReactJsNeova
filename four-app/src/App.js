import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent';
import PersonFormComponent from './PersonFormComponent';
import LifeCycle from './LifeCycle';
import LifeCycleUpdate from './LifeCycleUpdate';

function App() {
  return (
    <div>
      {/* <FormComponent/> */}
      {/* <PersonFormComponent/> */}
      {/* <LifeCycle/> */}
      <LifeCycleUpdate/>
    </div>
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
  );
}

export default App;
