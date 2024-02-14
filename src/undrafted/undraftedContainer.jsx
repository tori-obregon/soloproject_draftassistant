import React from 'react';
import UndraftedPlayer from './undraftedPlayer.jsx';

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


export default function UndraftedContainer() {
  return (
    <div id='undraftedContainer'>
      <table>
        <thead>
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
        </thead>
        <tbody>
          {undraftedPlayer.map((player) => (
          <UndraftedPlayer key={player.player} {...player}/>))
          }
        </tbody>
      </table>
    </div>
  );
}