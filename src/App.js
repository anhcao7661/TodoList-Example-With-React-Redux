import React from 'react';
import Todos from './components/TodoList/Todos'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App_container'>
        <div className='app_todoContainer'>
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
