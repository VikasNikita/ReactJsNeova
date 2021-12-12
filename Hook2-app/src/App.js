import logo from "./logo.svg";
import "./App.css";
// import UseEffect from './UseEffect';
// import Functional from './Functional';
import HookSample from "./HookSample";
// import RefParent from './RefParent';
import PortalDemo from "./PortalDemo";
import ProfileDemo from "./ProfileDemo";
import UserComponent from "./UserComponent";
// import Flight from './Flight';
// import Increment from './NormalProps';
import { render } from "@testing-library/react";
import Incrementer from "./Incrementer";
import NormalProps from "./NormalProps";
import Increment from "./Increment";
import NewIncrement from "./NewIncrement";
import Decrement from "./Decrement";
import Decrementer from "./Decrementer";
import NewDecrement from "./New Decrement";
import DemoComponent from "./DemoComponent";
import Reconcillation from "./Reconcillation";
import KeyComponent from "./KeyComponent";

function App() {
  return (
    <div className="container">
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
      {/* <NormalProps render={(someValue) =>{
            return "Old Value "+someValue;
        }}/>

        <Incrementer render={(value,onClickHandler)=>{
          return <Increment value={value} onClickHandler={onClickHandler}/>;
        }}/>
        <br/>
        <Incrementer
        render ={(value,onClickHandler) => {
          return <NewIncrement value={value} onClickHandler={onClickHandler}/>
        }}
        />

          <Decrementer render={(value,onClickHandler) => {
          return <Decrement value={value} onClickHandler={onClickHandler}/>;
        }}/>


          <Decrementer render={(value,onClickHandler) => {
          return <NewDecrement value={value} onClickHandler={onClickHandler}/>;
        }}/> */}
      {/* <UseEffect/> */}
      {/* <Functional/> */}
      {/* <HookSample/> */}
      {/* <UserComponent/> */}
      {/* </header> */}
      {/* <RefParent/> */}I am Inside my Component
      {/* <PortalDemo/> */}
      {/* <ProfileDemo/> */}
      {/* <DemoComponent/> */}
      {/* <Reconcillation /> */}
      <KeyComponent />
    </div>
  );
}

export default App;
