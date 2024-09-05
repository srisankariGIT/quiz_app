import React, { useContext, useState } from 'react';
import '../App.css';
import { GameStateContext } from '../helpers/Contexts';
import CustomAlert from './CustomAlert'; // Import the CustomAlert component

function Menu() {
  const { setGameState, setUserName } = useContext(GameStateContext);
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleStart = () => {
    if (name.trim()) {
      setUserName(name);
      setGameState("playing");
    } else {
      setShowAlert(true); // Show the custom alert with the "Name is required" message
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Hide the custom alert
  };

  return (
    <div className="menu-container">
      <div className="menu-content">
        <h1>Welcome to the Quiz</h1>
        <p>Please enter your name to get started:</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleStart}>Start Quiz</button>
        {showAlert && <CustomAlert message="Name is required." onClose={handleCloseAlert} />}
      </div>
    </div>
  );
}

export default Menu;
