const Scorebelow70 = ({ players }) => {
  const players70 = [];

  players.forEach(item => {
    if (item.score <= 70) {
      players70.push(item);
    }
  });

  return (
    <div>
      <h2>Players with Score ≤ 70</h2>

      <ul>
        {players70.map(item => (
          <li key={item.name}>
            Mr. {item.name}: {item.score}
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );
};

export default Scorebelow70;
