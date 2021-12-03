import logo from './logo.svg';
import './App.css';
import NavbarComponent from './NavbarComponent';
import TodoComponent from './TodoComponent';
import PostComponent from './PostComponent';
import UserComponent from './UserComponent';
import { Route, Routes } from 'react-router';

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
    <div >

      <NavbarComponent/>
      
      <Routes>
        <Route path={"/post"} element={<PostComponent/>}/>
        <Route path={"/todo"} element={<TodoComponent/>}/>
        <Route path={"/users"} element={<UserComponent/>}/>
        </Routes>
    </div>
  );
}

export default App;
