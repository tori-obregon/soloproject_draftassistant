import React from 'react';
import { createRoot } from 'react-dom/client';
import UndraftedContainer from './undrafted/undraftedContainer.jsx';
import MyTeamContainer from './myTeam/myTeamContainer.jsx';
import OverviewContainer from './myTeam/overviewContainer.jsx';
import PlayerSelectionPopUp from './playerSelectionPopUp.jsx';


export default function App() {
  return (
    <div>
      <h1>this is the app</h1>
      <button>RESET</button>
      <OverviewContainer />
      <MyTeamContainer />
      <UndraftedContainer />  
      <PlayerSelectionPopUp />
    </div>
    
  )
}

const root = createRoot(document.querySelector('#app'));
root.render(<App />,);