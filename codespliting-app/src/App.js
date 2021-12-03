import logo from './logo.svg';
import './App.css';
import NavbarComponent from './NavbarComponent';
// import TodoComponent from './TodoComponent';
// import PostComponent from './PostComponent';
// import UserComponent from './UserComponent';
import { Route, Routes } from 'react-router';
import Accessibility from './Accessibility';
import { PersonProvider } from './PersonContext';
import ContextConsumer from './ContextConsumer';
// import { Fragment, Suspense } from 'react';
import ErrorBoundry from './ErrorBoundry';
// import CodeSpliting from './CodeSpliting';
import React from 'react';
import SampleError from './SampleError';
import FragmentSample from './FragmentSample';
import { Suspense } from 'react';
const CodeSpliting = React.lazy(() => import ("./CodeSpliting"));
const PostComponent =React.lazy(()=>import("./PostComponent"));
const TodoComponent =React.lazy(()=> import("./TodoComponent"));
const ResultComponent=React.lazy(()=>import ("./ResultComponent"));
const UserComponent=React.lazy(()=>import ("./UserComponent"));

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
     <Suspense fallback={<h1>Loading.....</h1>}>
     <NavbarComponent/>

     <CodeSpliting/>

       <Routes>
          <Route path={"/post"} element={<PostComponent/>}/>
          <Route path={"/todo"} element={<TodoComponent/>}/>
          <Route path={"/users"} element={<UserComponent/>}/>
          <Route path={"/code"} element={<CodeSpliting/>}/>
          <Route path={"/result"} element={<ResultComponent/>}/>
        </Routes>
         
        </Suspense>
        <ErrorBoundry>
            <SampleError/>
          </ErrorBoundry>
        {/* <Accessibility/>
        <PersonProvider value={ {name : "Nikita", age: 24}}>
           <ContextConsumer/>
        </PersonProvider> */}
          <FragmentSample/>

    </div>
  );
}

export default App;
