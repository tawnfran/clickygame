import React from 'react';
import Card from './components/card';
import './App.css';

export default function App() {
  const [flipped, setFlipped] = React.useState([])

  const handleClick = (id) => setFlipped(id)

  return (
    <div>
      <h2> Can you memorize where all the cards are?</h2>
      <Card
      id={1}
      width={100}
      height={100}
      back={'/img.back.png'}
      front={'/img.react.png'}
      flipped={flipped.includes(1)}
      handleClick={() => handleClick(1)}
      />
    </div>
  );
}


