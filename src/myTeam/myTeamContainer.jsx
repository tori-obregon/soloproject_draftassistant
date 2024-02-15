import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchUndraftedPlayers } from '../redux/undraftedPlayersSlice.js';


export default function MyTeamContainer() {
  //if myTeam is empty, then render a single <td> that has "no players added"
  //if myTeam is not empty, then render rows using .map


 const myTeam = useSelector((state) => state.undraftedPlayers.myTeam);
 console.log(myTeam);

 const [myTeamCurr, setMyTeamCurr] = useState(myTeam);

 useEffect(() => {
  setMyTeamCurr(myTeam);
 }, [myTeam]
 )

 let rows;

  if(Object.keys(myTeamCurr).length == 0) {
    console.log('myTeam is empty');
    rows = (
      <tr>
        <td>No Players Added</td>
      </tr>
    )
  }
  else {
    function populateRows() {
      for(let position in myTeamCurr) { //iterate through each property in myTeam obj
        return (
          <tr key={position.player}>
              <td>[position input]</td>
              <td>{position.player}</td>
              <td>{position.pts}</td>
              <td>{position.reb}</td>
              <td>{position.ast}</td>
              <td>{position.blk}</td>
              <td>{position.stl}</td>
              <td>{position.fg_percentage}</td>
              <td>{position.ft_percentage}</td>
              <td>{position.threept}</td>
              <td>{position.ftsy}</td>
              <td>[paid price]</td>                         
          </tr>
          )
        }
        console.log('rows populated');
       }
      
      rows = populateRows();
    };

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
