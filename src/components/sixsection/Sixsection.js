import logo from '../images/logos/logo_promo__fazfbao4faem_small_2x.png';
import logos from '../images/promos/logo_oscars__e3nca3zsrngy_small_2x.png';
import React, { Component } from 'react'
import Sidesection from '../sidesection/Sidesection'
export class Sixsection extends Component {
  render() {
    return (
      <div>
        <Sidesection img1={logo} sectionname="six-section" logo_div="oscar" iphone_description_left=" Save 6% onApple products with" img2={logos} iphone_description_left2="a new Apple Card-all March long" text4="Watch now" sub="4"/>
      </div>
    )
  }
}

export default Sixsection
