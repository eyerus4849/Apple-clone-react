import React, { Component } from 'react'
import logo from '../images/icons/logo-sm.png';
import cart from '../images/icons/cart-sm.png';
import search from '../images/icons/search-icon-sm.png';
import Navlink from './Navlink'
export class Header extends Component {
  render() {
    return (
      <div>
      <div className="nav-wrapper fixed-top ">
        <div className="container-lg">
          <nav className="navbar navbar-default
          navbar-toggleable-sm navbar-expand-md">
            <button className="navbar-toggler  navbar-toggler-right" type="button" data-toggle="collapse"
              data-target=".navbar-collapse">
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="/"><img src={logo}/></a>
            <a className="navbar-brand mx-4 cart-mob" href="#"><img src={cart} /></a>
            <div className="navbar-collapse collapse">
              <div className="search-mob">
                <input className="srch" type="search" placeholder="Search apple.com"/>
              </div>
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <Navlink link="/mac" name="Mac"/>
                <Navlink link="/iphone" name="iphone"/>
                <Navlink link="/ipad" name="ipad"/>
                <Navlink link="/Watch" name="Watch"/>
                <Navlink link="/TV" name="TV"/>
                <Navlink link="/Music" name="Music"/>
                <Navlink link="/Suppor" name="Suppor"/>
                <li className="nav-item  srch-mobile">
                  <a className="nav-link js-scroll-trigger" href="/search/"><img src={search} /></a>
                </li>
                <li className="nav-item srch-mobile">
                  <a className="nav-link js-scroll-trigger" href="/search/"><img src={cart}/></a>
                </li>
              </ul>
            </div>
    
          </nav>
        </div>
    
      </div>
       
      </div>
    )
  }
}

export default Header
