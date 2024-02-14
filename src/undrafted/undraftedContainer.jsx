import React from 'react';
import UndraftedPlayer from './undraftedPlayer.jsx';




export default function UndraftedContainer() {
  return (
    <div id='undraftedContainer'>
      <table>
        <tr>
          <th>Position</th>
          <th>Player</th>
          <th>PTS</th>
          <th>REB</th>
          <th>AST</th>
          <th>BLK</th>
          <th>STL</th>
          <th>FG%</th>
          <th>FT%</th>
          <th>3PT</th>
          <th>Fantasy Score</th>
          <th>$ Suggested Bid</th>
        </tr>
        <UndraftedPlayer />
      </table>
    </div>
  )
}