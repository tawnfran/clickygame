import React, { Component } from 'react';
import Card from './components/card';
import './App.css';
import data from './data.json';

class App extends Component {
  state = { data, score: 0, topScore: 0 };
  componentDidMount() {
    this.setState({data:this.shuffleData(this.state.data)})

  }
  handleCorrectGuess = newData => {

  }
  handleIncorrectGuess = data => {

  }
  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };
  handleItemClick = id => {

  }
  render() {
    return (
      <div>
        <h2> Can you memorize where all the cards are?</h2>
        {this.state.data.map(item => (
          <Card
            id={item.id}
            width={100}
            height={100}
            front={item.image}
            handleClick={this.handleItemClick}
          />
        ))}

      </div>
    );
  }
}

export default App;