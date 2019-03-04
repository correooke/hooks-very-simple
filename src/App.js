import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [showTimer, setShowTimer] = useState(false);

    return (
      <div className="App">
        <button onClick={() => setShowTimer(!showTimer)}>Mostrar cronómetro</button>
        {
          showTimer ? 
            <div className="alert alert-danger">OFF</div> : 
            <div className="alert alert-success">ON</div>
        }
      </div>
    );
  }

export default App;
