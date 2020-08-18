import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/classCounter'
import HooksCounter from './components/hooksCounter'
import HooksCounter2 from './components/hooksCounter2'
import IntervalClass from './components/intervalClassCounter'

function App() {
  return (
    <div className="App">
    {/* <ClassCounter />
     <HooksCounter /> */}
     <IntervalClass />
    </div>
  );
}

export default App;
