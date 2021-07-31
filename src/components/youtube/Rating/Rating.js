import React, { Component } from 'react'
import './rate.css'
 class Rating extends Component {
     constructor(){
         super();
         this.state={
rate:  5
         }

     }
     rate_up = ()=>{
         if(this.state.rate<10){
            this.setState((state)=>{return{rate:state.rate+1}});
         }

     }
     rate_down = ()=>{
         if(this.state.rate>0){
            this.setState((state)=>{return{rate:state.rate-1}});
         }
        
             }
    render() {
        let initialText = "Average rating: ";
    let changedText = "You rated this product: "
    let displayText = "";

    let counter = 1; 

    if(this.state.rate != 5){
      counter = counter + 1; 
    }

    if(counter == 2){
      displayText = changedText;
    }else{
      displayText = initialText; 
    }
    console.log(counter)
        return (
            <div className="text-center rate">
                <h1>Please Rate This ipadAir</h1>
                <h2> {displayText}{this.state.rate}</h2>
                <button className="rate-up" onClick={this.rate_up}>Rate Up</button>
                <button className="rate-down" onClick={this.rate_down}>Rate Down</button>
            </div>
        )
    }
}

export default Rating
