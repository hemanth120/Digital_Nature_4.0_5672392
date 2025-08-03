import React from 'react';
import './App.css'; 
import office1 from './content/Office1.jpeg';
import office2 from './content/Office2.jpeg';
import office3 from './content/Office3.jpeg';
const officeList = [
  {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai",
    imgSrc: office1
  },
  {
    Name: "WeWork",
    Rent: 70000,
    Address: "Bangalore",
    imgSrc: office2
  },
  {
    Name: "Regus",
    Rent: 60000,
    Address: "Mumbai",
    imgSrc: office3
  }
];

const App = () => {
  return (
    <div>
      <h1> Office Space Listings</h1>
      {officeList.map((item, index) => {
        const rentColorClass = item.Rent <= 60000 ? 'textRed' : 'textGreen';

        return (
          <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <img src={item.imgSrc} alt="Office Space" width="25%" height="25%" />
            <h2>{item.Name}, at Affordable Range</h2>
            <h3>Name: {item.Name}</h3>
            <h3 className={rentColorClass}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;
