import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUndraftedPlayers } from '../redux/undraftedPlayersSlice.js';
import PlayerSelectionPopUp from './playerSelectionPopUp.jsx';


export default function UndraftedContainer() {
  const undraftedPlayers = useSelector((state) => state.undraftedPlayers.undraftedPlayers);
  const [player, setPlayer] = useState('');
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
        {undraftedPlayers.map((player) => {
                    return (
                        <tr key={player.player}>
                            <td>{player.positions}</td>
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
                            <td>{player.suggested_bid}</td>
                            <td><button id={player.player} onClick={() => {setPlayer(player.player);togglePopUp}}>SELECT</button></td>
                            <td><button>TAKEN</button></td>                          
                        </tr>
                    )
                })}
      </table>
      <PlayerSelectionPopUp isVisible={isPopupVisible} togglePopUp={togglePopUp} selectedPlayer={player}/>
    </div>
  )
}