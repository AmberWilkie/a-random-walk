import React, { Component } from "react";
import { checkpoints } from "../helpers/constants";
import { Link } from 'react-router-dom';

class IndividualRace extends Component {

    render() {
        return(
            <div>
                <div className="container">
                    <span className="header">Yay! You reached all check points!</span>
                </div>
                {checkpoints.map(checkpoint => (
                        <div className="race" key={checkpoint.name}>
                            <div>
                                {checkpoint.image && <img className="small-icon" src={checkpoint.image}/> }
                                <span>{checkpoint.name}</span>
                                <img className="small-icon" src="http://icons.iconarchive.com/icons/succodesign/love-is-in-the-web/512/heart-icon.png"/>
                            </div>
                            (<span>{checkpoint.distance}</span> in <span>{checkpoint.time}</span>)
                            <img className="small-icon" src="data:image/jpeg;base64,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"/>
                        </div>
                    )
                )}
                <div className="summary">
                    Summary
                    <ul>
                        <li>2km 685min</li>
                        <li>14m 83sek</li>
                        <li>x km / min</li>
                    </ul>
                    <ul>
                        <li>You beat your own record 3 times!!</li>
                        <li>You've never ran this fast! Great job!</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default IndividualRace;
