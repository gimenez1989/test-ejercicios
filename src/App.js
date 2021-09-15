import React, { useState } from 'react'
import './App.css';

function App() {
  const [inputText, setInputText] = useState ("")
 
  const change = (e) => {
    
    if( e.target.value.length < 5) {
    setInputText(e.target.value) 
    }
     
  }
 
  return (
    <div className="App">
      <header className="App-header">
          <h1>Input controlado tipo texto de largo menor a 5</h1>
          <div>
            <input type="text" value={inputText} onChange={change}/>
          </div> 
      </header>
    </div>
  );
}

export default App;
