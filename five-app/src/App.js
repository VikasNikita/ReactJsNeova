import logo from './logo.svg';
import './App.css';
import { RefsComponent } from './RefsComponent';
import RefsCallBackComponent from './RefsCallBackComponent';
import DynamicClass from './DynanicClass';
import DynamicClassComponent from './DynamicClassComponent';

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
    <div className="container">

      <h1>Form App</h1>
      {/* <RefsComponent/> */}
      {/* <RefsCallBackComponent/> */}
      {/* <h1 className={"my-class"}>From App</h1> */}
      {/* <div className={"my-div"}>I am inside my div</div> */}
      {/* <DynamicClass/> */}
      {/* <DynamicClassComponent/> */}
    </div>
  );
}

export default App;
