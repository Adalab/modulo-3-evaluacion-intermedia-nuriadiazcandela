import React from 'react';
import '../stylesheet/App.scss';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemons,
    };
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Mi lista de Pokemon</h1>
        <PokeList pokemons={this.state.pokemons}></PokeList>
      </div>
    );
  }
}

export default App;
