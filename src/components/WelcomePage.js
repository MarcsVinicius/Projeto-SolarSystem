import React from 'react';
import Sunimg from '../images/welgif.gif';

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welDisplay">
        <img className="sunImg" src={ Sunimg } alt="sol bonito" />
        <div className="welText">
          <h1>| Você conhece o sistema solar ?</h1>
          <h3>| Aqui você encontra algumas informações sobre</h3>
          <a href="#header">Clique aqui para conhecer 🚀</a>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
