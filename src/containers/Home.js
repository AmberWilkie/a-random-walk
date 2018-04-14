import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Home extends Component {
    state = {};

    render() {
        return(
            <div>
                <div>
                    <img src="https://imageog.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" className="icon"/>
                </div>
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
