import React from 'react';
import propTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="infoCard">
        <h4 data-testid="mission-name">{`nome: ${name}` }</h4>
        <p data-testid="mission-year">{`ano: ${year}` }</p>
        <p data-testid="mission-country">{`país: ${country}` }</p>
        <p data-testid="mission-destination">{`Destino: ${destination}` }</p>
      </div>
    );
  }
}

export default MissionCard;
MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
};
