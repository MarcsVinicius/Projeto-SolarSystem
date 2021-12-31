import React from 'react';

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="weldiv">
        <h1 className="textwel">| Você conhece o sistema solar ?</h1>
        <h3 className="textwel">| Aqui você encontra algumas informações sobre</h3>
        <a href="#header" className="textwel">Clique aqui para conhecer 🚀</a>
      </div>
    );
  }
}

export default WelcomePage;
