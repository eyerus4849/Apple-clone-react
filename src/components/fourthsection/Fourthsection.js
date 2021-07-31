import React, { Component } from 'react'
import Sidesection from '../sidesection/Sidesection'
import  logos from '../images/logos/logo__dcojfwkzna2q_medium_2x (2).png';
  import logo from '../images/logos/logo__dcojfwkzna2q_medium_2x.png'
export class Fourthsection extends Component {
  render() {
    return (
      <div>
        <Sidesection img1={logos} sectionname="fourth-section" logo_div="series" additional_descriptio_name="white" iphone_description_left="The future of health is on your wrist" img2={logo} iphone_description_right="A new fitness exprience" text1="for everyone" text2="Powered by" text3="AppleWatch" sub="3"/>
      </div>
    )
  }
}

export default Fourthsection
