import React from 'react';

export default function UndraftedPlayer() {
  return (
    <tr id='undraftedPlayer'>
      <td id='position'>PG</td>
      <td id='player'>Chris Paul</td>
      <td id='pts'>[#average]</td>
      <td id='reb'>[#average]</td>
      <td id='ast'>[#average]</td>
      <td id='blk'>[#average]</td>
      <td id='stl'>[#average]</td>
      <td id='fg%'>[#average]</td>
      <td id='ft%'>[#average]</td>
      <td id='3pt'>[#average]</td>
      <td id='fantasyScore'>[#score]</td>
      <td id='bidPrice'>[# $$]</td>
      <td><button>SELECT</button></td>
      <td><button>TAKEN</button></td>
    </tr>
  )
}
