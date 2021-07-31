import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from '../images/icons/logo-sm.png';
import cart from '../images/icons/cart-sm.png';
import search from '../images/icons/search-icon-sm.png';
function Headerbootstrap() {
    return (
        // <div>
            <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand className="mx-auto" href="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Brand className="mx-4 cart-mob" href="/">
            <img src={cart} alt="" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
            <div className="search-mob">
                <input className="srch" type="search" placeholder="Search apple.com"/>
              </div>
              <Nav.Link className="nav-link nav-item" href="/mac">
                Mac
              </Nav.Link>
              <Nav.Link className="nav-link nav-item" href="/iphone">iphone</Nav.Link>
              <Nav.Link className="nav-link nav-item" href="/ipad">ipad</Nav.Link>
              <Nav.Link className="nav-link nav-item" href="/watch">watch</Nav.Link>
              <Nav.Link className="nav-link nav-item" href="/tv">tv</Nav.Link>
              <Nav.Link className="nav-link nav-item" href="/music">Music</Nav.Link>
              <Nav.Link className="nav-link nav-item" href="/support">Support</Nav.Link>
              <Nav.Link className="nav-link nav-item srch-mobile" href="/search">
                <img src={search} alt="" />
              </Nav.Link>
              <Nav.Link className="nav-link nav-item srch-mobile" href="/cart">
                <img src={cart} alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
        // </div>
    )
}

export default Headerbootstrap


