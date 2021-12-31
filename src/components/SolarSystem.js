import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSytem extends React.Component {
  render() {
    const PlanetsRender = Planets.map((planet, i) => (<PlanetCard
      planetName={ planet.name }
      planetImage={ planet.image }
      key={ i }
    />));
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="🪐 Planetas" />
        <div className="planetsDiv">
          { PlanetsRender }
        </div>
      </div>);
  }
}

export default SolarSytem;
