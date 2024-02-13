import React from 'react';
import UndraftedPlayer from './undraftedPlayer.jsx';

export default function UndraftedContainer() {
  return (
    <div id='undraftedContainer'>
        <h1>undrafted Container</h1>
        <UndraftedPlayer />
        <UndraftedPlayer />
        <UndraftedPlayer />
    </div>
  )
}
