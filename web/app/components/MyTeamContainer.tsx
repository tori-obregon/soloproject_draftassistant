import { useDraftStore } from "~/stores/useDraftStore";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "~/components/ui/table";

export default function MyTeamContainer() {
  const myTeam = useDraftStore((state) => state.myTeam);
  const entries = Object.entries(myTeam);

  return (
    <div id='myTeamContainer' className='p-4'>
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
            <TableHead>$ Bid Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.length === 0 ? (
            <TableRow>
              <TableCell colSpan={12} className='text-center italic'>
                No Players Added
              </TableCell>
            </TableRow>
          ) : (
            entries.map(([position, player]) => (
              <TableRow key={player.player}>
                <TableCell>{position}</TableCell>
                <TableCell>{player.player}</TableCell>
                <TableCell>{player.pts}</TableCell>
                <TableCell>{player.reb}</TableCell>
                <TableCell>{player.ast}</TableCell>
                <TableCell>{player.blk}</TableCell>
                <TableCell>{player.stl}</TableCell>
                <TableCell>{player.fg_percentage}</TableCell>
                <TableCell>{player.ft_percentage}</TableCell>
                <TableCell>{player.threept}</TableCell>
                <TableCell>{player.ftsy}</TableCell>
                <TableCell>{player.bid_price}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
