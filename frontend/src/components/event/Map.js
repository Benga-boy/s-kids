import React from 'react'
import MapGl, { Marker } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'


const Map = ({ longitude, latitude }) => (

  //* currently using personal access token, must get own before deployment
    <MapGl
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      height={'280px'}
      width={'320px'}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      latitude={latitude}
      longitude={longitude}
      zoom={13}
    >
      <Marker
        latitude={latitude}
        longitude={longitude}
      >
        <span role="img" aria-label="marker" style={{ fontSize: '33px' }}>📍</span>
      </Marker>
    </MapGl>
)



export default Map