// import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';

function App() {
  const name="Nikita";
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
      <h1> Hello {name && name.length ? name :"World"}</h1>
      <div>
        <MyFirstComponent parentComponentName={"App"}/>
      </div>

      <div>
        <MySecondComponent parentComponentName={"App"}/>
      </div>

    </div>
  );
}

export default App;
