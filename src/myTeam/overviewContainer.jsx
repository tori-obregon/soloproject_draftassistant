import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useAtom } from 'jotai';
import { testAtom, strongCategoriesAtom } from "../jotai/overallQualityAtoms.js";

export default function OverviewContainer() {
  const myTeam = useSelector((state) => state.undraftedPlayers.myTeam);
  const [ strongCat, setStrongCat ] = useAtom(strongCategoriesAtom);
  const [myTeamCurr, setMyTeamCurr] = useState(myTeam);



  useEffect(() => {
    setMyTeamCurr(myTeam);
   }, [myTeam]
   )

  let rows;

  if(Object.keys(myTeamCurr).length == 0) {
    console.log('myTeamCurr is empty');
    rows = (
      <tr>
      <td>{strongCat}</td>
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
    )
  }
  else {
    //function to populate rows
    function findOverallValues() {
      //object to hold average of each category
      let averages = {};
      //function to iterate through myTeam for the values, 
      Object.entries(myTeamCurr).map((currplayer) => {
        console.log('currplayer', currplayer);
        //and pull the category values and add them to averages obj
        for(const category in currplayer[1]) {
          if(category in averages) {
            //and find the average per category
            averages[category] = (averages[category] + parseFloat(currplayer[1][category])) / Object.entries(myTeamCurr).length;
          }
          else {
            averages[category] = parseFloat(currplayer[1][category]);
          }
        };
        const omit = (obj, ...props) => {
          const result = { ...obj };
          props.forEach((prop) => {
            delete result[prop];
          });
          return result;
        }
        averages = omit(averages, 'player', 'bid_price');
        console.log('averages', averages);
      })
        return (
          <tr>
          <td>{strongCat}</td>
          <td>{averages.pts}</td>
          <td>{averages.reb}</td>
          <td>{averages.ast}</td>
          <td>{averages.blk}</td>
          <td>{averages.stl}</td>
          <td>{averages.fg_percentage}</td>
          <td>{averages.ft_percentage}</td>
          <td>{averages.threept}</td>
          <td>{averages.ftsy}</td>
          <td>[#$$]</td>
        </tr>
        )
    };

    //set rows to invoked function
    rows = findOverallValues();
  }

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
        {rows}
      </table>
    </div>
  )
}
