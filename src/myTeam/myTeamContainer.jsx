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
        console.log('myTeamCurr[position]', myTeamCurr[position]);
        return (
          <tr key={myTeamCurr[position].player}>
              <td>{position}</td>
              <td>{myTeamCurr[position].player}</td>
              <td>{myTeamCurr[position].pts}</td>
              <td>{myTeamCurr[position].reb}</td>
              <td>{myTeamCurr[position].ast}</td>
              <td>{myTeamCurr[position].blk}</td>
              <td>{myTeamCurr[position].stl}</td>
              <td>{myTeamCurr[position].fg_percentage}</td>
              <td>{myTeamCurr[position].ft_percentage}</td>
              <td>{myTeamCurr[position].threept}</td>
              <td>{myTeamCurr[position].ftsy}</td>
              <td>{myTeamCurr[position].bid_price}</td>                         
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
