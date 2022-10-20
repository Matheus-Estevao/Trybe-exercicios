import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {'Matheus Estevão'}
        </h1>
        <p>
          {'descrição'}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>{'Js'}</li>
          <li>{'React'}</li>
          <li>{'CSS'}</li>                    
        </ul>
      </div>
    );
  }
}

export default About;