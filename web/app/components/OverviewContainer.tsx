import React, { useMemo } from "react";
import { useDraftStore } from "../stores/useDraftStore"; // update path as needed

export default function OverviewContainer() {
  const myTeam = useDraftStore((state) => state.myTeam);

  const rows = useMemo(() => {
    const teamEntries = Object.entries(myTeam);
    if (teamEntries.length === 0) {
      return (
        <tr>
          {Array.from({ length: 11 }).map((_, i) => (
            <td key={i}>[average]</td>
          ))}
        </tr>
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
      <tr>
        <td>[# strong categories]</td>
        <td>{averages.pts}</td>
        <td>{averages.reb}</td>
        <td>{averages.ast}</td>
        <td>{averages.blk}</td>
        <td>{averages.stl}</td>
        <td>{averages.fg_percentage}</td>
        <td>{averages.ft_percentage}</td>
        <td>{averages.threept}</td>
        <td>{averages.ftsy}</td>
        <td>{totalSpent}</td>
      </tr>
    );
  }, [myTeam]);

  return (
    <div id='overviewContainer'>
      <table>
        <thead>
          <tr>
            <th># Strong Categories</th>
            <th>AVG PTS</th>
            <th>AVG REB</th>
            <th>AVG AST</th>
            <th>AVG BLK</th>
            <th>AVG STL</th>
            <th>AVG FG%</th>
            <th>AVG FT%</th>
            <th>AVG 3PT</th>
            <th>AVG Fantasy Score</th>
            <th>$ Total Spent</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
