import React, { Component } from 'react'
import TobBar from './TobBar'
import HeroImage from './HeroImage' 
import Sections from './Sections'

class Landingpage extends Component {
  render() {
    return (
      <>
        <TobBar/>
        <HeroImage/>
        <Sections/>
      </>
    )
  }
}

export default Landingpage