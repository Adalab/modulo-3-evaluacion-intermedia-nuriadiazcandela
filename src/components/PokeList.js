import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    const PokeItems = this.props.pokemons.map((pokemon) => {
      return (
        <li className="container" key={pokemon.id}>
          <Pokemon id={pokemon.id} name={pokemon.name} types={pokemon.types} url={pokemon.url} />
        </li>
      );
    });
    return (
      <div>
        <ul className="card">{PokeItems}</ul>
      </div>
    );
  }
}
PokeList.propTypes = {
  pokemons: PropTypes.array,
};

export default PokeList;
