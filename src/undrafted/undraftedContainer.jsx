import React from 'react';


export default function UndraftedContainer() {
  const undraftedPlayer = [
    {
      position: 'pg',
      player: 'chris paul',
      pts: 1,
      reb: 2,
      ast: 3,
      blk: 4,
      stl: 5,
      fg : 6,
      ft : 7,
      threept : 8,
      fantasy_score: 9,
      suggested_bid : 10
    },
    {
      position: 'pf',
      player: 'steph curry',
      pts: 1,
      reb: 2,
      ast: 3,
      blk: 4,
      stl: 5,
      fg : 6,
      ft : 7,
      threept : 8,
      fantasy_score: 9,
      suggested_bid : 10
    }
  ];

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
        {undraftedPlayer.map((player) => {
                    return (
                        <tr key={player.player}>
                            <td>{player.position}</td>
                            <td>{player.player}</td>
                            <td>{player.pts}</td>
                            <td>{player.reb}</td>
                            <td>{player.ast}</td>
                            <td>{player.blk}</td>
                            <td>{player.stl}</td>
                            <td>{player.fg}</td>
                            <td>{player.ft}</td>
                            <td>{player.threept}</td>
                            <td>{player.fantasy_score}</td>
                            <td>{player.suggested_bid}</td>
                            <td><button>SELECT</button></td>
                            <td><button>TAKEN</button></td>                          
                        </tr>
                    )
                })}
      </table>
    </div>
  );
}