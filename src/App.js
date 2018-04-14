import React, { Component } from 'react';
import './App.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import {geolocated} from 'react-geolocated';


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYW1iZXJ3aWxraWUiLCJhIjoiY2pmeWgyZGwwMmhsNTMzcWo3b3N3eDc0ZCJ9.n9886gh1orIJhUbgIM0miQ"
});

class App extends Component {
  state = {};

  render() {
    console.log(this.props.coords);
    console.log(this.props.isGeolocationEnabled);
    const coordinates = this.props.isGeolocationAvailable && this.props.coords ? [this.props.coords.longitude, this.props.coords.latitude] : [10, 59]
    console.log(coordinates);
    const coords1 = [18.07, 59.4]

    return (
      <div className="App">
        <div onClick={() => this.setState({coordinates })}>Set to my location</div>
        <form>
          <input name='points' type='number' />
        </form>
        <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={this.state.coordinates}
          zoom={[12]}
          containerStyle={{
            height: "80vh",
            width: "100vw"
          }}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={coords1}/>
          </Layer>
        </Map>
        </div>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);
