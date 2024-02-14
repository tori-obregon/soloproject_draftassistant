import React from 'react'

function closePopUp() {
//TODO: functionality to close the popup
  //somehow change visibility in CSS to hidden
}


export default function PlayerSelectionPopUp() {
  return (
    <div id='playerSelectionPopUp'>
        <h1>PlayerSelectionPopUp</h1>
        <button id='closePopUpBtn'>X</button> 
        <h3>[playerName]</h3>
        <label>How much did you pay?</label>
        <input type='text' placeholder='$1'></input>
        <label>Choose a Position</label>
        <select id="positin" name="Select a position">
            <option value="Player1">Player1</option>
            <option value="Player2">Player2</option>
            <option value="Player3">Player3</option>
            <option value="Player4">Player4</option>
        </select>
        <button>SUBMIT</button>
    </div>
  )
}
 