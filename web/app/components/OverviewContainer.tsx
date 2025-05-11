import React, { useMemo } from "react";
import { useDraftStore } from "../stores/useDraftStore";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "~/components/ui/table";

export default function OverviewContainer() {
  const myTeam = useDraftStore((state) => state.myTeam);

  const row = useMemo(() => {
    const teamEntries = Object.entries(myTeam);
    if (teamEntries.length === 0) {
      return (
        <TableRow>
          {Array.from({ length: 11 }).map((_, i) => (
            <TableCell key={i}>[average]</TableCell>
          ))}
        </TableRow>
      );
    }

    const averages: Record<string, number> = {};
    const omitKeys = ["player", "bid_price"];

    teamEntries.forEach(([_, player]) => {
      Object.entries(player).forEach(([key, value]) => {
        if (omitKeys.includes(key)) return;
        const val = parseFloat(value as any);
        averages[key] = (averages[key] || 0) + val;
      });
    });

    Object.keys(averages).forEach((key) => {
      averages[key] = Math.round((averages[key] / teamEntries.length) * 100) / 100;
    });

    const totalSpent = teamEntries.reduce((acc, [_, p]) => acc + (p.bid_price || 0), 0);

    return (
      <TableRow>
        <TableCell>[# strong categories]</TableCell>
        <TableCell>{averages.pts}</TableCell>
        <TableCell>{averages.reb}</TableCell>
        <TableCell>{averages.ast}</TableCell>
        <TableCell>{averages.blk}</TableCell>
        <TableCell>{averages.stl}</TableCell>
        <TableCell>{averages.fg_percentage}</TableCell>
        <TableCell>{averages.ft_percentage}</TableCell>
        <TableCell>{averages.threept}</TableCell>
        <TableCell>{averages.ftsy}</TableCell>
        <TableCell>{totalSpent}</TableCell>
      </TableRow>
    );
  }, [myTeam]);

  return (
    <div id='overviewContainer' className='p-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead># Strong Categories</TableHead>
            <TableHead>AVG PTS</TableHead>
            <TableHead>AVG REB</TableHead>
            <TableHead>AVG AST</TableHead>
            <TableHead>AVG BLK</TableHead>
            <TableHead>AVG STL</TableHead>
            <TableHead>AVG FG%</TableHead>
            <TableHead>AVG FT%</TableHead>
            <TableHead>AVG 3PT</TableHead>
            <TableHead>AVG Fantasy Score</TableHead>
            <TableHead>$ Total Spent</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{row}</TableBody>
      </Table>
    </div>
  );
}
