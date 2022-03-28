import React from 'react';
import WelcomePage from './components/WelcomePage';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <WelcomePage />
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
