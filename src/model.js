import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="Main">
        <div className="sketchfab-embed-wrapper">
          <iframe width="640" height="480" src="https://sketchfab.com/models/98c91435c2c549e09745ebcc86ed91c0/embed" frameBorder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
      </div>
    );
  }
}

export default App;
