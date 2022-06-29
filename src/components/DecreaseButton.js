import React from 'react'

const DecreaseButton = ({decreaseButton}) => {
  return (
    <button className="btn btn-danger mx-2 mt-4" onClick={decreaseButton}>-</button>
  )
}

export default DecreaseButton