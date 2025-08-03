import React from 'react'

import ListofPlayers, {IndianTeam, players, IndianPlayers} from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import {OddPlayers, EvenPlayers, ListofIndianPlayers} from './IndianPlayers';


export default function App() {
  
  
 
  var flag = true;
  if(flag===true)
  {
  return (
<div>
    <ListofPlayers players={players}/>
    <Scorebelow70 players={players}/>
    </div>
  )
}
 
else{
  return(
    <div>
      <h2>Indian Team</h2>
      <h2>Odd Players</h2>
      {OddPlayers(IndianTeam)}
      <hr/>
      <h2>Even Players</h2>
      {EvenPlayers(IndianTeam)}
      <hr/>
      <ListofIndianPlayers IndianPlayers={IndianPlayers}/>
    </div>
  );
}}

