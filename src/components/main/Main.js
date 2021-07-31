import React, { Component } from 'react';
import Firstsection from '../firstsection/Firstsection'
import Covidsection from '../covidsection/Covidsection'
import Secondsection from '../secondsection/Secondsection'
import Thirdsection from '../thirdsection/Thirdsection'
import Fourthsection from '../fourthsection/Fourthsection'
import Fifthsection from '../fifthsection/Fifthsection'
import Sixsection from '../sixsection/Sixsection'
import Youtube from '../youtube/Youtube';
import Rating from '../youtube/Rating/Rating';

class Main extends Component {
    render() {
        return (
            <div>
               <Covidsection/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      {/* <Rating/> */}
      <Fourthsection/>
      <Fifthsection/>
      <Sixsection/> 
      {/* <Youtube/> */}
     
            </div>
        );
    }
}

export default Main;
