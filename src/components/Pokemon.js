import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const PokeTypes = this.props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });

    return (
      <div className="cardPoke">
        <img src={this.props.url} alt={this.props.url} />
        <h2 className="cardName">{this.props.name}</h2>
        <ul className="cardType"> {PokeTypes} </ul>
      </div>
    );
  }
}
Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Pokemon;
