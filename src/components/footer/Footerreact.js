import React, { Component } from 'react'
export class Footerreact extends Component {
    constructor() {
        super();
        var arrfooterh3=[]
        for(var i=0;i<=10;i++){
arrfooterh3.push({show:false})
        } 
        this.state = {
      
        arr:arrfooterh3
         
        };
      }
      FooterToggle=(index)=>{
          this.state.arr[index].show=!this.state.arr[index].show
        this.setState({
            });
      }
    render() {
        return (
   <footer>
      <div className="container">
        <ol className="fotter-ol">
          <li> Price includes a $30 AT&T, T-Mobile, Sprint, or Verizon discount. Requires activation with carrier. Monthly
            pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or
            Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon for purchases in
            an Apple Store. Taxes and shipping not included. Additional Apple Card Monthly Installments and iPhone
            Payments terms apply.</li>
          <li>Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon
            for purchases in an Apple Store. Taxes and shipping not included. Additional Apple Card Monthly Installments
            and iPhone Payments terms apply.</li>
          <li> Subject to credit approval. Valid only on qualifying purchases in the U.S. for new Apple Card customers who
            open an account and use it between 3/1/2021 and 3/31/2021 at Apple Store locations, apple.com, the Apple Store
            app, or by calling 1-800-MY-APPLE. Accounts opened prior to 3/1/2021 or after 3/31/2021 do not qualify. 6% is
            the total amount of Daily Cash that can be earned for qualifying Apple purchases using Apple Card. The
            following purchases with Apple Card are ineligible to earn 6% back, but will still earn 3% back: monthly
            financing through Apple Card Monthly Installments, Apple iPhone Payments, iPhone Upgrade Program, and wireless
            carrier financing plans; Apple Media Services; AppleCare+ monthly payments. Returning qualified items that
            were purchased during the offer period may impact your cash back. 6% savings is earned as Daily Cash and is
            transferred to your Apple Cash card when transactions post to your Apple Card account. If you do not have an
            Apple Cash card, Daily Cash can be applied by you as a credit on your statement balance. See <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf">Apple Card
              Customer Agreement</a> the for more details on Daily Cash and qualifying transactions. Apple Card issued by
            Goldman Sachs Bank USA, Salt Lake City Branch.</li>
          <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with
            iOS or iPadOS 13.2 or later. Update to the latest version of iOS or iPadOS by going to Settings  General 
            Software Update. Tap Download and Install.</p>
          <p>Available for qualifying applicants in the United States</p>
          <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch</p>
          <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>
          <li>$9.99/month after free trial. No commitment. Plan automatically renews after trial until cancelled.</li>
          <li>Apple Music subscription required.</li>
          <p>Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months
            after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms
            apply.</p>
        </ol>
        <div className="row footer-link">
 <div className="footer-link-1 col-sm-12 col-md ">
            <h3 onClick={() => this.FooterToggle(0)} className={`${this.state.arr[0].show ? "cross" : "plus"}`}>Shop and Learn</h3>
  <ul  className={this.state.arr[0].show ? "" : "hide "}>
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">AirPods</a></li>
              <li><a href="#">HomePod</a></li>
              <li><a href="#">iPod touch</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className="footer-link-2 col-sm-12 col-md ">
            <h3 onClick={() => this.FooterToggle(1) } className={`${this.state.arr[1].show ? "cross" : "plus"}`}   >Services</h3>
            <ul className={this.state.arr[1].show ? "" : "hide"}>
              <li><a href="#">Apple Music</a></li>
              <li><a href="#">Apple News+</a></li>
              <li><a href="#">Apple TV+</a></li>
              <li><a href="#">Apple Arcade</a></li>
              <li><a href="#">Apple Card</a></li>
              <li><a href="#">iCloud</a></li>
            </ul>
            
            
            <h3 className={`${this.state.arr[2].show ? "cross" : "plus"}`}onClick={() => this.FooterToggle(2)}>Account</h3>
            <ul className={this.state.arr[2].show ? "" : "hide"}>
              <li><a href="#">Manage Your Apple ID</a></li>
              <li><a href="#">Apple Store Account</a></li>
              <li><a href="#">iCloud.com</a></li>
            </ul>
          </div>
          <div className="footer-link-3 col-sm-12 col-md ">
            <h3 className={`${this.state.arr[3].show ? "cross" : "plus"}`}onClick={() => this.FooterToggle(3)}>Apple Store</h3>
            <ul className={this.state.arr[3].show ? "" : "hide"}>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Genius Bar</a></li>
              <li><a href="#">Today at Apple</a></li>
              <li><a href="#">Apple Camp</a></li>
              <li><a href="#">Field Trip</a></li>
              <li><a href="#">Apple Store App</a></li>
              <li><a href="#">Refurbished and Clearance</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">Apple Trade In</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shopping Help</a></li>
            </ul>
          </div>
          <div className="footer-link-4 col-sm-12 col-md ">
            <h3 className={`${this.state.arr[4].show ? "cross" : "plus"}`}onClick={() => this.FooterToggle(4)}>For Business</h3>
            <ul className={this.state.arr[4].show ? "" : "hide"}>
              <li><a href="#">Apple and Business</a></li>
              <li><a href="#">Shop for Business</a></li>
            </ul>
            <h3 className={`${this.state.arr[5].show ? "cross" : "plus"}`}onClick={() => this.FooterToggle(5)}>For Education</h3>
            <ul className={this.state.arr[5].show ? "" : "hide"}>
              <li><a href="#">Apple and Education</a></li>
              <li><a href="#">Shop for College</a></li>
            </ul>
            <h3 className={`${this.state.arr[6].show ? "cross" : "plus"}`}onClick={() => this.FooterToggle(6)}>For Healthcare</h3>
            <ul className={this.state.arr[6].show ? "" : "hide"}>
              <li><a href="#">Manage Your Apple ID</a></li>
              <li><a href="#">Apple Store Account</a></li>
              <li><a href="#">iCloud.com</a></li>
            </ul>
            <h3 className={`${this.state.arr[7].show ? "cross" : "plus"}`}onClick={() => this.FooterToggle(7)}>For Government</h3>
            <ul className={this.state.arr[7].show ? "" : "hide"}>
              <li><a href="#">Apple and Education</a></li>
              <li><a href="#">Shop for College</a></li>
            </ul>
          </div>
          <div className="footer-link-5 col-sm-12 col-md ">
            <h3 className={`${this.state.arr[8].show ? "cross" : "plus"}`}onClick={() => this.FooterToggle(8)}>Apple Values</h3>
            <ul className={this.state.arr[8].show ? "" : "hide"}>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Genius Bar</a></li>
              <li><a href="#">Today at Apple</a></li>
              <li><a href="#">Apple Camp</a></li>
              <li><a href="#">Field Trip</a></li>
              <li><a href="#">Apple Store App</a></li>
            </ul>
            <h3 className={`${this.state.arr[9].show ? "cross" : "plus"}`}onClick={() => this.FooterToggle(9)}>About Apple</h3>
            <ul className={this.state.arr[9].show ? "" : "hide"}>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Genius Bar</a></li>
              <li><a href="#">Today at Apple</a></li>
              <li><a href="#">Apple Camp</a></li>
              <li><a href="#">Field Trip</a></li>
              <li><a href="#">Apple Store App</a></li>
            </ul>
          </div>
        </div>
       
        <div className="more-ways">
          <p>More ways to shop: <a href="">Find an Apple Store</a> or <a href="">other retailer</a> near you. Or call
            1-800-MY-APPLE.</p>
        </div>
        <div className="row copy-wrapper">
          <div className="copy col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">Copyright &copy; 2021 Apple Inc. All
            rights reserved.</div>
          <div className="privacy col-sm-12 order-3 col-lg-6 order-lg-2">
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Sales and Refunds</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>
          <div className="usa col-sm-12 order-sm-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">united states</div>
        </div>
      </div>
    </footer>
        )
    }
}

export default Footerreact
