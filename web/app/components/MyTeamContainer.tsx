import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { fetchUndraftedPlayers } from '../redux/undraftedPlayersSlice.js';

export default function MyTeamContainer() {
  //if myTeam is empty, then render a single <td> that has "no players added"
  //if myTeam is not empty, then render rows using .map

  //  const myTeam = useSelector((state) => state.undraftedPlayers.myTeam);

  const [myTeamCurr, setMyTeamCurr] = useState("myTeam");

  //  useEffect(() => {
  //   setMyTeamCurr(myTeam);
  //  }, [myTeam]
  //  )

  let rows;

  // if (Object.keys(myTeamCurr).length == 0) {
  //   rows = (
  //     <tr>
  //       <td>No Players Added</td>
  //     </tr>
  //   );
  // } else {
  //   function populateRows() {
  //     return Object.entries(myTeamCurr).map(([position, playerDetails]) => {
  //       return (
  //         <tr key={playerDetails.player}>
  //           <td>{position}</td>
  //           <td>{playerDetails.player}</td>
  //           <td>{playerDetails.pts}</td>
  //           <td>{playerDetails.reb}</td>
  //           <td>{playerDetails.ast}</td>
  //           <td>{playerDetails.blk}</td>
  //           <td>{playerDetails.stl}</td>
  //           <td>{playerDetails.fg_percentage}</td>
  //           <td>{playerDetails.ft_percentage}</td>
  //           <td>{playerDetails.threept}</td>
  //           <td>{playerDetails.ftsy}</td>
  //           <td>{playerDetails.bid_price}</td>
  //         </tr>
  //       );
  //     });
  //   }
  //   rows = populateRows();
  // }

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
        {/* {rows} */}
      </table>
    </div>
  );
}
