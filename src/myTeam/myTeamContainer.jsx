import React from 'react'
import { useSelector } from 'react-redux';
import { fetchUndraftedPlayers } from '../redux/undraftedPlayersSlice.js';


export default function MyTeamContainer() {
//  const myTeam = useSelector((state) => state.undraftedPlayers.myTeam);

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
        {/* {myTeam.map((player) => {
                    return (
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
                })} */}
      </table>

    </div>
    
  )
}
