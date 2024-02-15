import React from 'react'


export default function PlayerSelectionPopUp({ isVisible, togglePopUp }) {
  const visibilityStyle = {visibility: isVisible ? 'visible' : 'hidden'};

  return (
    <div id='playerSelectionPopUp' style={visibilityStyle}>
        <h1>PlayerSelectionPopUp</h1>
        <button id='closePopUpBtn' onClick={togglePopUp}>X</button> 
        <h3>[playerName]</h3>
        <label>How much did you pay?</label>
        <input type='text' placeholder='$1'></input>
        <label>Choose a Position</label>
        <select id="positin" name="Select a position">
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
        <button>SUBMIT</button>
    </div>
  )
}
 