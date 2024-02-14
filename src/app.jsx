import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.scss';

import UndraftedContainer from './undrafted/undraftedContainer.jsx';
import MyTeamContainer from './myTeam/myTeamContainer.jsx';
import OverviewContainer from './myTeam/overviewContainer.jsx';
import PlayerSelectionPopUp from './playerSelectionPopUp.jsx';


export default function App() {
  return (
    <div id='app'>
      <button id='resetBtn'>RESET</button>
      <h1>My Team</h1>
      <h2>Overall</h2>
      <OverviewContainer />
      <h2>My Players</h2>
      <MyTeamContainer />
      <h1>Available Players</h1>
      <UndraftedContainer />  
      <PlayerSelectionPopUp />
    </div>
    
  )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />,);