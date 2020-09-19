import React from 'react'
import MapGl, { Marker } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  state = {
    viewport: {
      longitude: this.props.longitude,
      latitude: this.props.latitude,
      height: '280px',
      width: '320px',
      zoom: 13
    }
  }
  render() {
    const {viewport} = this.state
    return (
          <MapGl
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      {...viewport}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      onViewportChange={(viewport) => {this.setState({viewport})}}
    >
      <Marker
        latitude={viewport.latitude}
        longitude={viewport.longitude}
      >
        <span role="img" aria-label="marker" style={{ fontSize: '33px' }}>📍</span>
      </Marker>
    </MapGl>
    )
  }
}



export default Map