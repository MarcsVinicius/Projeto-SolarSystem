import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage } = this.props;
    const { planetName } = this.props;
    return (
      <div data-testid="planet-card" className="infoCard">
        <img className="planetImg" src={ planetImage } alt={ `Planeta ${planetName}` } />
        <h4 data-testid="planet-name">{planetName}</h4>
      </div>);
  }
}

export default PlanetCard;
PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};
