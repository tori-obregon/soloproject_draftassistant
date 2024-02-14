import React from 'react'

export default function OverviewContainer() {
  return (
    <div id='overviewContainer'>
      <table>
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
        <tr>
          <td>[+-5]</td>
          <td>[average]</td>
          <td>[average]</td>
          <td>[average]</td>
          <td>[average]</td>
          <td>[average]</td>
          <td>[average]</td>
          <td>[average]</td>
          <td>[average]</td>
          <td>[#score]</td>
          <td>[#$$]</td>
        </tr>
      </table>
    </div>
  )
}
