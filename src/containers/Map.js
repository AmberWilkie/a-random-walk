import React, { Component } from 'react';
import '../stylesheets/App.css';
import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl } from "react-mapbox-gl";
import {geolocated} from 'react-geolocated';
import FakeData from '../helpers/Coordinates';
import { sampleSize } from 'lodash';


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYW1iZXJ3aWxraWUiLCJhIjoiY2pmeWgyZGwwMmhsNTMzcWo3b3N3eDc0ZCJ9.n9886gh1orIJhUbgIM0miQ"
});

class App extends Component {
  state = {};

  render() {
    // const coordinates = this.props.isGeolocationAvailable && this.props.coords ? [this.props.coords.longitude, this.props.coords.latitude] : [59.3415145,18.0622277]
    const coordinates = [18.1224809, 59.3238719]
    console.log(coordinates);
    const coords1 = [18.07, 59.4];

    const pointsToMap = sampleSize(FakeData.stockholm.city, 5).map((point, index) => {
      console.log(index === 0);
      return {...point, visible: index === 0}
    });
    console.log(pointsToMap);

    const getCenterCoords = () => {
      const points = pointsToMap.filter(point => point.visible);
      const point = points[points.length - 1]
      console.log(point);
      return point && [point.lng, point.lat]
    }

    return (
      <div className="App">
        <div onClick={() => this.setState({coordinates })}>Set to my location</div>
        <form>
          <input name='points' type='number' />
        </form>
        <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={getCenterCoords()}
          zoom={[13]}
          containerStyle={{
            height: "80vh",
            width: "100vw"
          }}>
          <ZoomControl/>
          {/*<Layer*/}
            {/*type="symbol"*/}
            {/*id="marker"*/}
            {/*layout={{ "icon-image": "marker-15" }}>*/}
            {/*<Layer>*/}
            {pointsToMap.filter(point => point.visible).map(point =>
              <Marker onClick={() => console.log('hey a click')}
                      key={point.lat} coordinates={[point.lng, point.lat]}>
                <img style={{width: '25px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2Xe6GOumiExgwO2euSFOvae-zrZIzk_ZaJb572r5IyxMWkRd' />
              </Marker>)}

          {/*</Layer>*/}
        </Map>
        </div>
      </div>
    );
  }
}

// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 5000,
// })(App);
export default App;
