import React, { Component } from 'react'
import Topsections from '../topsections/Topsections'
export class Firstsection extends Component {
  render() {
    return (
      <div>
        <Topsections sectionname="first-section" iphonename="iphone12" iphonedescription="Blast past fast"
        iphonepricefirst="From $29.12/mo. for 24mo" iphonepricesecond=" or $699 before trade-in" buy1="Buy directly from Apple" buy2="with special carrier offers" sub="1"/>
      </div>
    )
  }
}

export default Firstsection
