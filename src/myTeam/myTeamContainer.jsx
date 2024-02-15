import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { fetchUndraftedPlayers } from '../redux/undraftedPlayersSlice.js';


export default function MyTeamContainer() {
  //if myTeam is empty, then render a single <td> that has "no players added"
  //if myTeam is not empty, then render rows using .map


 const myTeam = useSelector((state) => state.undraftedPlayers.myTeam);
 console.log(myTeam);

 let rows;

  if(Object.keys(myTeam).length == 0) {
    console.log('myTeam is empty');
    rows = (
      <tr>
        <td>No Players Added</td>
      </tr>
    )
  }
  else {
    rows = myTeam.map((player) => {
       (
          <tr key={player.player}>
              <td>[position input]</td>
              <td>{player.player}</td>
              <td>{player.pts}</td>
              <td>{player.reb}</td>
              <td>{player.ast}</td>
              <td>{player.blk}</td>
              <td>{player.stl}</td>
              <td>{player.fg_percentage}</td>
              <td>{player.ft_percentage}</td>
              <td>{player.threept}</td>
              <td>{player.ftsy}</td>
              <td>[paid price]</td>                         
          </tr>
          )
      })
    };


//  useEffect(() => {
//  //function that is activated when myTeam array is updated
//  populateMyTeam();
//  }, [myTeam]);


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
        {rows}
      </table>
    </div>
    
  )
}
