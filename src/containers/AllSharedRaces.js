import React, { Component } from "react";
import { allRaces } from '../helpers/constants';
import { Link } from 'react-router-dom';

class AllSharedRaces extends Component {

    render() {
        return(
            <div>
                <div className="container">
                    <span className="header">All shared races</span>
                </div>
                Top shared near your position:
                {allRaces.map(race => (
                    <Link to={race.link} className="race" key={race.name}>
                        <div>
                            <span>{race.likes}</span>
                            <img className="small-icon" src="http://icons.iconarchive.com/icons/succodesign/love-is-in-the-web/512/heart-icon.png"/>
                        </div>
                        <span>{race.name}</span>
                        <img className="small-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8SExMAAAAPEBANDg74+Pj19fWWlpaXl5cJCgqTk5Pz8/N/f3+Li4t7e3uIiIgYGRkfICA8PT3p6elUVlZLS0uCg4PR0dGpqamfn5+wsLAvMjJvb2/c3Nzt7e1nZ2crKyu6/0pGAAAC1ElEQVR4nO2d23baMBAA8Q0joAFCQpO2afr/X9nc2hOs7Zs5KqOZL9g9sneslSUtFiIiIiIiIiIiIiIiIiIiIiIiIvJvvj3f399tj6XDuBjHXym1qW33Y+lILsRT03bNK327HUoHcwk2d23zQZ++bEqHcwEeDn3DTvHm7xC+pbjDPag/nz9n+JLitnREc3M8z/C13JQOaWaGH+cZNh0uxXXqshRZ7+LX29RMUky7ZemoZuUx9ZMUadIYVm2Xp4gaxWEdpHgqHdWsLMc8xfamdFSzssxHkSaNYZWVmw42isN6n6UIk8aw7pTG1aM0CNQgjbGtURrtCVZuGrw0gnJTgzRYHbigovaJVW5qkMY6kAYsxTGrqLQOXODFl3JTgTT4KbKkEXqRVW6CyRTtM3xZgTRWgTRuYO8ivwM3TtfeeNKwAwegjg4cXxo9vgM32oG7fpQGgRqkEU2maNLgL9tUII28yag0ro4aOnDRKLLKzTJPESeNCtb6ow4cbNkm9yJu2SaUBj9FmDQiL7IqagXSWObS6NNj6ahmJZBGumVttM2l0R0eSgc1L8PqMHkX0650TDOzmW6ZgtUa/hji30N8LQ1WpFg+xH/T4L9L8XML/PwQP8fH92nwvTa+Jug9b/y6BX7tCf/TCX4NGL+Oj/8XA/8/Df6fKDVx7VSgCfg/wvj/vNXEtcPXBH3fE37vGn7/YZ2aICWI38sdHzkAegfxZyqE52KgEqSfbYI/nwZ/xhD+nCj8WV+RJnrUdAnfVQvPTWQ9omriqommSxVoonRUMxJ11WCayM/z7uGa6GFdNfi5+tHHdktq3dfZVSONYKwJ0LdodFcQShPBfU+s5bMK7uwK7l0jFZlFdHceLMH8/kNagtM7LFmaeOfsHlLUdOkP/LtkF0/7j2+ahOqqfeb4vX2/03lVOpLL8XYv94m0xVVEREREREREREREREREREREROT/4TeYxCXEBEsv5wAAAABJRU5ErkJggg=="/>
                    </Link>
                    )
                )}
            </div>
        )
    }
};

export default AllSharedRaces;
