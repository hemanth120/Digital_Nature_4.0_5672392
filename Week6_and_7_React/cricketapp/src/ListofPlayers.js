
export const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

 export const IndianTeam=["Sachin1", "Dhoni2","Virat3", "Jadeja4", "Raina5","Rohit6"];

 const T20Players = ['First Player', ' Second Player', 'Third Player'];
 const RanjiTrophyPlayers=['Fourth Player', 'Fifth Player', 'Sixth Player'];
 export const IndianPlayers = [...T20Players,...RanjiTrophyPlayers];

const ListofPlayers = ({players}) => {

  return (
    <div>
      <h2> Cricket Players List</h2>
      <ul>
        {players.map(item => (
          <li key={item.name}>
            Mr. {item.name}: {item.score}
          </li>
        ))}
      </ul>

      <hr />

    </div>
  );
};

export default ListofPlayers;