import React from 'react';
import '../stylesheet/App.scss';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Mi lista de Pokemon</h1>
        <PokeList pokemons={pokemons}></PokeList>
      </div>
    );
  }
}

export default App;
