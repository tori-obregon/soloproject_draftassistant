import React from 'react'
import MyPlayer from './myPlayer.jsx';

export default function MyTeamContainer() {
  return (
    <div id='myTeamContainer'>
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
          <th>$ Bid Price</th>
        </tr>
        <MyPlayer />
      </table>

    </div>
    
  )
}
