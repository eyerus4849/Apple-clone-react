import logo from '../images/promos/logo__dcojfwkzna2q_medium_2x.png';
import logos from '../images/logos/logo__dcojfwkzna2q_small_2x.png';
import React, { Component } from 'react'
import Sidesection from '../sidesection/Sidesection'
export class Fifthsection extends Component {
  render() {
    return (
      <div>
        <Sidesection img1={logo} sectionname="fifth-section" logo_div="series" iphone_description_left=" with Active Noise Cancellation" img2={logos} iphone_description_right="Bundle up to six Apple services" text1="And enjoy more for less" text2="Powered by" text4="Try it free" sub="4"/>
      </div>
    )
  }
}

export default Fifthsection
