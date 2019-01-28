import React, { Component } from 'react';

import { HashRouter, Route } from 'react-router-dom';

import Home from './Home';

import Dtmf from './dtmf';
import Fft from './fft';
import SoundWaves from './soundwaves';

import ImageQuantization from './imagequantization';

import Metaballs from './metaballs';
import Shader from './shader';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />

          <Route path="/dtmf" component={Dtmf} />
          <Route path="/fft" component={Fft} />
          <Route path="/soundwaves" component={SoundWaves} />

          <Route path="/imagequantization" component={ImageQuantization} />

          <Route path="/metaballs" component={Metaballs} />
          <Route path="/shader" component={Shader} />
        </div>
      </HashRouter>
    );
  }
}
