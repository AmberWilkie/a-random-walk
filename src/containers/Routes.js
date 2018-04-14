import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RaceForm from './RaceForm';
import Map from './Map';
import Home from './Home';
import AllSharedRaces from "./AllSharedRaces";
import IndividualRace from "./IndividualRace";

const Routes = () => (
    <Router>
        <div>
            <div>
                <Link to="/">
                    <img className="icon" src="https://imageog.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"/>
                </Link>
            </div>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/RaceForm" component={RaceForm} />
                <Route path="/Map" component={Map} />
                <Route path="/AllSharedRaces" component={AllSharedRaces} />
                <Route path="/IndividualRace" component={IndividualRace} />
            </div>
        </div>
    </Router>
)

export default Routes;