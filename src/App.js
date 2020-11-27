import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountReducer from './components/countReducer';
import ClassCounter from './components/classCounter'
import HooksCounter from './components/hooksCounter'
import HooksCounter2 from './components/hooksCounter2'
import IntervalClass from './components/intervalClassCounter'
import HooksInterval from './components/hooksInterval'
import HooksCounterTwo from './components/hooksCounterTwo';
import Effect from './components/effectRunOnce';
import MouseContainer from './components/MouseContainer';
import DataFetching from './components/dataFetching';
import ComponentC from './components/context/ComponentC';
import PostDetails from './components/postDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export const userContext=React.createContext();
const userName="Maheen";
const age='22';
function App() {
 
  return (
    <div className="App">
      <CountReducer />
    {/* <userContext.Provider value={userName}>
      <ComponentC />
      </userContext.Provider> */}
   
     {/* <Router>
       <Switch>
       <Route exact path='/' component={ComponentC} />
       <Route path='/:id' component={PostDetails} />
       </Switch>
     </Router> */}
    </div>
  );
}
  {/* <MouseContainer /> */}
  // <DataFetching />
  {/* <ClassCounter /> */}
   {/* <HooksCounter2 /> */}
   {/* <HooksCounterTwo /> */}
   {/* <IntervalClass />
   <HooksInterval /> */}
export default App;
