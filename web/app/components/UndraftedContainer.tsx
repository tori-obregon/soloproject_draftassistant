import { useEffect, useState } from "react";
import { useDraftStore } from "~/stores/useDraftStore";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import PlayerSelectionPopUp from "./PlayerSelectionPopUp";

export default function UndraftedContainer() {
  const fetchUndraftedPlayers = useDraftStore((state) => state.fetchUndraftedPlayers);
  const undraftedPlayers = useDraftStore((state) => state.undraftedPlayers);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopUp = () => setIsPopupVisible(!isPopupVisible);

  useEffect(() => {
    fetchUndraftedPlayers();
  }, [fetchUndraftedPlayers]);

  return (
    <div id='undraftedContainer' className='p-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Position</TableHead>
            <TableHead>Player</TableHead>
            <TableHead>PTS</TableHead>
            <TableHead>REB</TableHead>
            <TableHead>AST</TableHead>
            <TableHead>BLK</TableHead>
            <TableHead>STL</TableHead>
            <TableHead>FG%</TableHead>
            <TableHead>FT%</TableHead>
            <TableHead>3PT</TableHead>
            <TableHead>Fantasy Score</TableHead>
            <TableHead>$ Suggested Bid</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {undraftedPlayers.map((playerObj, index) => {
            const [playerName, player] = Object.entries(playerObj)[0];

            return (
              <TableRow key={playerName}>
                <TableCell>{player.positions}</TableCell>
                <TableCell>{playerName}</TableCell>
                <TableCell>{player.pts}</TableCell>
                <TableCell>{player.reb}</TableCell>
                <TableCell>{player.ast}</TableCell>
                <TableCell>{player.blk}</TableCell>
                <TableCell>{player.stl}</TableCell>
                <TableCell>{player.fg_percentage}</TableCell>
                <TableCell>{player.ft_percentage}</TableCell>
                <TableCell>{player.threept}</TableCell>
                <TableCell>{player.ftsy}</TableCell>
                <TableCell>{player.suggested_bid}</TableCell>
                <TableCell className='space-x-2'>
                  <Button
                    variant='default'
                    onClick={() => {
                      setSelectedPlayer(playerName);
                      togglePopUp();
                    }}
                  >
                    Select
                  </Button>
                  <Button variant='secondary' disabled>
                    Taken
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <PlayerSelectionPopUp isVisible={isPopupVisible} togglePopUp={togglePopUp} selectedPlayer={selectedPlayer} />
    </div>
  );
}
