import React, { Component } from 'react'

export class Sidesection extends Component {
    render() {
        return (
            <section className={this.props.sectionname}>
    <div className="container-fluid">
      <div className="row">
        <div className="left-side col-sm-12 col-md-6">
          <div className="left-side-container">
            <div className="logo-series">
              <div className="series">
                <img width={this.props.left_logo_width} src={this.props.img1}/>
              </div>
            </div>
            <h4 className={`blast ${this.props.additional_descriptio_name}`}>
            {this.props.iphone_description_left}.
            </h4>
            <div className="blast">{this.props.iphone_description_left2}</div>
            <div className="links">
              <ul>
                <li><a href="#">Learn more</a></li>
                <li><a href="">Buy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-side col-sm-12 col-md-6">
          <div className="right-side-container">
            <div className={this.props.logo_div}>
              <img src={this.props.img2}/>
            </div>
            <div className="blast">
            {this.props.iphone_description_right}
              <span className="res">{this.props.text1}.
                <span className="res2">
                  {this.props.text2}</span>
                <span className="res3">{this.props.text3}</span>
              </span>
            </div>
         
            <div className="links">
              <ul>
                <li><a href="#">Learn more</a></li>
                <li className="">
                  <a href="">{this.props.text4}<sup>{this.props.sub}</sup></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        )
    }
}

export default Sidesection
