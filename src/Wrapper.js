import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MapForm from './Form';
import Map from './App';

const Wrapper = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Map">Map</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={MapForm} />
            <Route path="/Map" component={Map} />
        </div>
    </Router>
)

export default Wrapper;