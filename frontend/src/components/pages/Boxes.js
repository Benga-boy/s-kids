import React from 'react'

import Box1Card from '../pages/boxes/Box1Card'
import Box2Card from '../pages/boxes/Box2Card'
import Box3Card from '../pages/boxes/Box3Card'
import Box4Card from '../pages/boxes/Box4Card'
import Box5Card from '../pages/boxes/Box5Card'
import Box6Card from '../pages/boxes/Box6Card'

const Boxes = () => {
  return (

    <div className="columns is-multiline is-mobile">
      <div className="column is-one-third"><Box1Card /></div>
      <div className="column is-one-third"><Box2Card /></div>
      <div className="column is-one-third"><Box3Card /></div>
      <div className="column is-one-third"><Box4Card /></div>
      <div className="column is-one-third"><Box5Card /></div>
      <div className="column is-one-third"><Box6Card /></div>
    </div>

  )
}

export default Boxes