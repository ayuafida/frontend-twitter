import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';

import ProductList from './components/ProductList';

import Default from './components/Default';
import Footer from './components/Footer';





class App extends Component {
  render(){
    return (
      <React.Fragment>
       <Navbar/>
      
       <Switch>
         <Route exact path="/" component={ProductList}/>
       
         <Route component={Default}/>

       </Switch>

      <Footer/>
      </React.Fragment>


    );

  }
 
}

export default App;
