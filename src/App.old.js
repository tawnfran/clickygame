import React from 'react';
import Card from './components/card';
import './App.css';
import JsonData from './data.js';

export default function App() {
  const [flipped, setFlipped] = React.useState(false)
  const [data, setData] = React.useState({ data: JsonData });
  const handleClick = (id) => setFlipped(id)

  shuffleData = data => { let i = data.length - 1; while (i > 0) { const j = Math.floor(Math.random() * (i + 1)); const temp = data[i]; data[i] = data[j]; data[j] = temp; i--; } return data; };
  
  return (
    <div>
      <h2> Can you memorize where all the cards are?</h2>
      {data.data.map(item => (
        <Card
          id={item.id}
          width={100}
          height={100}
          front={item.image}
          flipped={true}
          handleClick={() => handleClick(true)}
        />
      ))}

    </div>
  );
}


