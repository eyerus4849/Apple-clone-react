import React, { Component } from 'react'
import Topsections from '../topsections/Topsections'
export class Secondsection extends Component {
  render() {
    return (
      <div>
        <Topsections sectionname="second-section" additionaliphonename="white" additionaldescriptionname="white"
        iphonename="iphone12 pro" iphonedescription="it's a leap year"
        iphonepricefirst="From $41.62/mo. for 24mo" iphonepricesecond=" or $999 before trade-in" sub="2" buy1="Buy directly from Apple" buy2="with special carrier offers"/>
      </div>
    )
  }
}

export default Secondsection
