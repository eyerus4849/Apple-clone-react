import React, { Component } from 'react'

export class Topsections extends Component {
    render() {
        return (
            <section className={this.props.sectionname}>
    <div className="container">
      <h2 className={`iphone-12 ${this.props.additionaliphonename}`} >{this.props.iphonename}</h2>
      <h3 className={`blast ${this.props.additionaldescriptionname} description`}>{this.props.iphonedescription}</h3>
      <div className={`price-tag ${this.props.price}`}>
      {this.props.iphonepricefirst}
        <span className="price-tag2"> {this.props.iphonepricesecond}<sup>{this.props.sub}</sup> </span>
      </div>
      <div className={`price-tag ${this.props.price}`}>
      {this.props.buy1}
        <span className="price-tag2">{this.props.buy2}.</span>
      </div>
      <div className="links">
        <ul>
          <li><a href="#">Learn more</a></li>
          <li><a href="">Buy</a></li>
        </ul>
      </div>
    </div>
  </section>
        )
    }
}

export default Topsections
