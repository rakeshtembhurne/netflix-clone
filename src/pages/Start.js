import React, { Component } from 'react'
import { Database } from '../store/Database';


export class Start extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: Database(),
    };
  }
  render() {
    return (
      <div>
        <div className="text-center">
          <br />
          <h2>टी.आर.डी. कौशल विकास</h2>
          <h2>TRD SKILL DEVELOPMENT</h2>
          <h3>नागपुर मंडल (मध्य रेलवे)</h3>
          <h3>NAGPUR DIVISION (C.R.)</h3>
          <p>
            <img className="home-logo" src="indian-railways-image-big.png" alt="Indian Railways" />
          </p>
          <br/>
        </div>
      </div>
    )
  }
}

export default Start
