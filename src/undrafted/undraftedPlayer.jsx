import React from 'react';

export default function UndraftedPlayer(props) {
  return (
    <tr id='undraftedPlayer'>
      <td id='position'>{props.position}</td>
      <td id='player'>{props.player}</td>
      <td id='pts'>{props.pts}</td>
      <td id='reb'>{props.reb}</td>
      <td id='ast'>{props.ast}</td>
      <td id='blk'>{props.blk}</td>
      <td id='stl'>{props.stl}</td>
      <td id='fg%'>{props.fg}</td>
      <td id='ft%'>{props.ft}</td>
      <td id='3pt'>{props.threept}</td>
      <td id='fantasyScore'>{props.fantasy_score}</td>
      <td id='bidPrice'>{props.suggested_bid}</td>
      <td><button>SELECT</button></td>
      <td><button>TAKEN</button></td>
    </tr>
  )
}
