import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMyTeam } from '../redux/undraftedPlayersSlice.js';



export default function PlayerSelectionPopUp({ isVisible, togglePopUp, selectedPlayer }) {
  const visibilityStyle = {visibility: isVisible ? 'visible' : 'hidden'};

  //states to handle when a player is selected or not
  const [selectedPlayerPlaceholder, setSelectedPlayerPlaceholder] = useState(selectedPlayer);
  
  if(!selectedPlayer) { //if a player is selected, then this should fire
    setSelectedPlayerPlaceholder('mickey');
  }

  //states to track the user input
  const [bid, setBid] = useState('');
  const [position, setPosition] = useState('');

  //func to activate reducer
  const dispatch = useDispatch();
  const handleSubmit = () => {  
    console.log('bid:', bid, 'position:', position, 'selectedPlayerPlaceholder:', selectedPlayerPlaceholder);
    dispatch(addMyTeam({bid: bid, position: position, myPlayer: selectedPlayerPlaceholder}));
    togglePopUp();
    }

  return (
    <div id='playerSelectionPopUp' style={visibilityStyle}>
        <h1>PlayerSelectionPopUp</h1>
        <button id='closePopUpBtn' onClick={togglePopUp}>X</button> 
        <h3>{selectedPlayerPlaceholder}</h3>
        <label>How much did you pay?</label>
        <input type='text' placeholder='$1' onChange={(input) => setBid(input.target.value)}></input>
        <label>Choose a Position</label>
        <select id="positin" name="Select a position" onChange={(input) => setPosition(input.target.value)} >
            <option value="pg">Point Guard</option>
            <option value="sg">Shooting Guard</option>
            <option value="sf">Small Forward</option>
            <option value="pf">Power Forward</option>
            <option value="c">Center</option>
            <option value="g">Guard</option>
            <option value="f">Forward</option>
            <option value="utl">Utility</option>
            <option value="b">Bench</option>
            <option value="o">Open</option>
        </select>
        <button onClick={() => {console.log('submitBtn clicked');handleSubmit()}}>SUBMIT</button>
    </div>
  )
}
 