import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUndraftedPlayers } from '../redux/undraftedPlayersSlice.js';
import PlayerSelectionPopUp from './playerSelectionPopUp.jsx';


export default function UndraftedContainer() {
  const undraftedPlayers = useSelector((state) => state.undraftedPlayers.undraftedPlayers);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUndraftedPlayers());
  }, [dispatch]);
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopUp = () => setIsPopupVisible(!isPopupVisible); 

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
        {undraftedPlayers.map((thisPlayer) => {
                    return (
                        <tr key={thisPlayer.player}>
                            <td>{thisPlayer.positions}</td>
                            <td>{thisPlayer.player}</td>
                            <td>{thisPlayer.pts}</td>
                            <td>{thisPlayer.reb}</td>
                            <td>{thisPlayer.ast}</td>
                            <td>{thisPlayer.blk}</td>
                            <td>{thisPlayer.stl}</td>
                            <td>{thisPlayer.fg_percentage}</td>
                            <td>{thisPlayer.ft_percentage}</td>
                            <td>{thisPlayer.threept}</td>
                            <td>{thisPlayer.ftsy}</td>
                            <td>{thisPlayer.suggested_bid}</td>
                            <td><button className='selectBtn' id={thisPlayer.player} onClick={() => {setSelectedPlayer(thisPlayer.player);console.log('btn clicked', selectedPlayer);togglePopUp()}}>SELECT</button></td>
                            <td><button className='takenBtn'>TAKEN</button></td>                          
                        </tr>
                    )
                })}
      </table>
      <PlayerSelectionPopUp isVisible={isPopupVisible} togglePopUp={togglePopUp} selectedPlayer={selectedPlayer}/>
    </div>
  )
}