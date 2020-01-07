import React, { Component } from 'react';
import Card from './components/card';
import './App.css';
import data from './data.json';

class App extends Component {
  state = { data, score: 0, topScore: 0 };
  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) })

  }
  handleCorrectGuess = newData => {
    const { topScore, score } = this.state
    const newScore = score + 1
    const newTopScore = Math.max(newScore, topScore)
    this.setState({
      data: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore,
    })

  }
  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    })

  }
  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
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
    let guessCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item }
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessCorrectly = true;

        }
      }
      return newItem
    })
    guessCorrectly ? this.handleCorrectGuess(newData): this.handleIncorrectGuess(newData)
  }
  render() {
    return (
      <div>
        <h2> Can you remeber which team you've already clicked on?</h2>
        <h4> Click on each team but don't click the same team twice!</h4>
        <h3> Score: {this.state.score} </h3>
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