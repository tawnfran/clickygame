import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default function Card({
  handleClick,
  id,
  back,
  front,
  height,
  width }) {

  return <div
    style={{
      width, height
    }}
    onClick={() => handleClick(id)}
  >
    <div className="flipper">
      <img alt=""
        style={{
          height, width
        }}
        className={"front"}
        src={front}
      />


    </div>
  </div>
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  back: PropTypes.string.isRequired,
  front: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}