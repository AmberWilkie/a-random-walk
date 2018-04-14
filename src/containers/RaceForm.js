import React, { Component } from "react";

class RaceForm extends Component {
    state = {};

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    sendDataToMap = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return(
            <div>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <label>
                        Where do you want to start?
                    </label>
                    <input type="text" name="startPoint" className="input-field" onChange={this.handleChange}/>
                    <label>
                        How many checkpoints would you like to visit?
                    </label>
                    <input type="text" name="checkpoints" className="input-field" onChange={this.handleChange}/>
                    <label>
                        How many km do you want to run?
                    </label>
                    <input type="text" name="distance" className="input-field" onChange={this.handleChange}/>
                    <div>
                        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/560128-200.png' name="run" className="image" onClick={() => this.setState({run: true})}/>
                        <img src='data:image/png;base64,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' name="run" className="image" onClick={() => this.setState({run: false})}/>
                    </div>
                    <input type="submit" value="Submit" className="btn" onClick={this.sendDataToMap}/>
                </form>
            </div>
        )
    }
};

export default RaceForm;
