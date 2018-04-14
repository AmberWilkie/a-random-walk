import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Home extends Component {
    state = {};

    render() {
        return(
            <div>
                <div className="top-score">
                  <p>Top Score:</p>
                  <span>0.3 Km / min</span>
                  <span>2.68 Km in 5 min </span>
                </div>
                <div className="buttons">
                    <Link to="./YourRaces" className="btn link">Your races</Link>
                    <Link to="./AllSharedRaces" className="btn link">All shared races</Link>
                    <Link to="./AddCheckpoint" className="btn link">Add a checkpoint!</Link>
                <br />
                    <Link to="./RaceForm" className="btn link">New race</Link>
                </div>
            </div>
        )
    }
};

export default Home;
