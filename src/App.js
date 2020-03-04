import React, { Component } from 'react';
import CatComponent from './CatComponent'
import {GraceHopperQuoteComponent} from './EinsteinQuoteComponent'
import MouseComponent from './MouseComponent.js'
class App extends Component {
  render() {
    return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />				
				<MouseComponent />
				{/* one more component missing */}
			</div>
		)
  }
}

export default App;