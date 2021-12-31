import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import MissionsInfo from '../data/missions';

class Missions extends React.Component {
  render() {
    const renderMissions = MissionsInfo.map((mission, i) => (<MissionCard
      name={ mission.name }
      year={ mission.year }
      country={ mission.country }
      destination={ mission.destination }
      key={ i }
    />));
    return (
      <div data-testid="missions">
        <Title headline="👩🏻‍🚀 Missões" />
        <div className="planetsDiv">
          { renderMissions }
        </div>
      </div>
    );
  }
}

export default Missions;
