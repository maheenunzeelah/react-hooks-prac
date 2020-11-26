import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/classCounter'
import HooksCounter from './components/hooksCounter'
import HooksCounter2 from './components/hooksCounter2'
import IntervalClass from './components/intervalClassCounter'
import HooksInterval from './components/hooksInterval'
import HooksCounterTwo from './components/hooksCounterTwo';
import Effect from './components/effectRunOnce';
import MouseContainer from './components/MouseContainer';
function App() {
  return (
    <div className="App">
    <MouseContainer />
    {/* <ClassCounter /> */}
     {/* <HooksCounter2 /> */}
     {/* <HooksCounterTwo /> */}
     {/* <IntervalClass />
     <HooksInterval /> */}
    </div>
  );
}

export default App;
