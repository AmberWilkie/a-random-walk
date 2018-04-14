import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RaceForm from './RaceForm';
import Map from './Map';
import Home from './Home';

const Wrapper = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/RaceForm">Start a race!</Link>
                </li>
                <li>
                    <Link to="/Map">Go to map</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/RaceForm" component={RaceForm} />
            <Route path="/Map" component={Map} />
        </div>
    </Router>
)

export default Wrapper;