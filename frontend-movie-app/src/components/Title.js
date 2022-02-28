import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div className="title" style={{textAlign: 'center'}}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  )
}

export default Title
