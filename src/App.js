import React, { Component } from "react";
import logo from './logo.svg';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Iphones from './pages/Iphone'
import Errorpage from './pages/Errorpage'
import Productdetail from './pages/Productdetail';
import Headerbootstrap from './components/header/Headerbootstrap'
import Footerreact from "./components/footer/Footerreact";
function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Headerbootstrap/>
    <Switch>
    <Route path="/" exact component={Main}/>
     
    <Route path="/iphone" exact component={Iphones}/>
    <Route path="/iphone/:pid" exact component={Productdetail} />
    <Route path="/" component={Errorpage}/>
    </Switch>
    <Footerreact/>
    {/* <Footer/> */}
  </Router>
   
  );
}

export default App;
