import React, { Component } from 'react'
import $ from "jquery"
 class Footer extends Component {
 
  render() {
    $(document).ready(function () {
      // 1st condition, if window's browser is originally < 767 when we open the browser
      if ($(window).width() < 767) {
        $(".footer-link").addClass("shoplist-mobile");
      }
     
      $(window).on("resize", function () {
        // 2nd condition, whenever we resize our window
        if ($(window).width() < 767) {
          $(".footer-link").addClass("shoplist-mobile");
          $(".arrow").removeClass("cross");
          $(".arrow").addClass("plus");
          $("footer ul").hide();
        }
        if ($(window).width() >768) {
          $(".footer-link").removeClass("shoplist-mobile");
          $("ul").show();
        }
      });
      $(document).on("click", ".shoplist-mobile h3", function () {
        $(this).next("ul").slideToggle();
      });
      
    
      $(document).on("click", ".footer-link h3", function () {
        $(this).parent().toggleClass("plus cross")
      });
    });
   
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
          <div className="footer-link-1 col-sm-12 arrow plus col-md">
            <h3 className="shop">Shop and Learn</h3>
  <ul id="shoplist" >
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
          <div className="footer-link-2 col-sm-12 col-md arrow plus">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Apple Music</a></li>
              <li><a href="#">Apple News+</a></li>
              <li><a href="#">Apple TV+</a></li>
              <li><a href="#">Apple Arcade</a></li>
              <li><a href="#">Apple Card</a></li>
              <li><a href="#">iCloud</a></li>
            </ul>
            <h3>Account</h3>
            <ul>
              <li><a href="#">Manage Your Apple ID</a></li>
              <li><a href="#">Apple Store Account</a></li>
              <li><a href="#">iCloud.com</a></li>
            </ul>
          </div>
          <div className="footer-link-3 col-sm-12 col-md arrow plus">
            <h3>Apple Store</h3>
            <ul>
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
          <div className="footer-link-4 col-sm-12 col-md arrow plus">
            <h3>For Business</h3>
            <ul>
              <li><a href="#">Apple and Business</a></li>
              <li><a href="#">Shop for Business</a></li>
            </ul>
            <h3>For Education</h3>
            <ul>
              <li><a href="#">Apple and Education</a></li>
              <li><a href="#">Shop for College</a></li>
            </ul>
            <h3>For Healthcare</h3>
            <ul>
              <li><a href="#">Manage Your Apple ID</a></li>
              <li><a href="#">Apple Store Account</a></li>
              <li><a href="#">iCloud.com</a></li>
            </ul>
            <h3>For Government</h3>
            <ul>
              <li><a href="#">Apple and Education</a></li>
              <li><a href="#">Shop for College</a></li>
            </ul>
          </div>
          <div className="footer-link-5 col-sm-12 col-md arrow plus">
            <h3>Apple Values</h3>
            <ul>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Genius Bar</a></li>
              <li><a href="#">Today at Apple</a></li>
              <li><a href="#">Apple Camp</a></li>
              <li><a href="#">Field Trip</a></li>
              <li><a href="#">Apple Store App</a></li>
            </ul>
            <h3>About Apple</h3>
            <ul>
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

export default Footer
