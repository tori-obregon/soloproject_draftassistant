import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMyTeam } from '../redux/undraftedPlayersSlice.js';



export default function PlayerSelectionPopUp({ isVisible, togglePopUp, selectedPlayer }) {
  const visibilityStyle = {visibility: isVisible ? 'visible' : 'hidden'};

  //states to handle when a player is selected or not
  const [selectedPlayerPlaceholder, setSelectedPlayerPlaceholder] = useState(selectedPlayer);

  //states to track the user input
  const [bid, setBid] = useState('');
  const [position, setPosition] = useState('pg');

  useEffect(() => {
    if(selectedPlayer) { //if a player is selected, then this should fire
    setSelectedPlayerPlaceholder(selectedPlayer);
  }}, [selectedPlayer]);

  //func to activate reducer
  const dispatch = useDispatch();
  const handleSubmit = () => {  
    // console.log('bid:', bid, 'position:', position, 'selectedPlayerPlaceholder:', selectedPlayerPlaceholder);
    dispatch(addMyTeam({bid: bid, position: position, myPlayer: selectedPlayerPlaceholder}));
    togglePopUp();
    }

  return (
    <div id='playerSelectionPopUp' style={visibilityStyle}>
        <button id='closePopUpBtn' onClick={togglePopUp}>X</button> 
        <h1>PlayerSelectionPopUp</h1>
        <h3>{selectedPlayerPlaceholder}</h3>
        <label>How much did you bid?</label>
        <input type='text' placeholder='$1' onChange={(input) => setBid(input.target.value)}></input>
        <label>Choose a Position</label>
        <select id="positin" name="Select a position" onChange={(input) => setPosition(input.target.value)} >
            <option value="Point Guard">Point Guard</option>
            <option value="Shooting Guard">Shooting Guard</option>
            <option value="Small Forward">Small Forward</option>
            <option value="Power Forward">Power Forward</option>
            <option value="Center">Center</option>
            <option value="Guard">Guard</option>
            <option value="Forward">Forward</option>
            <option value="Utility">Utility</option>
            <option value="Bench">Bench</option>
            <option value="Open">Open</option>
        </select>
        <button id='submitBtn' onClick={() => handleSubmit()}>SUBMIT</button>
    </div>
  )
}
 