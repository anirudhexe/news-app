import NavBar from './components/navbar';
import './App.css';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  pageSize=12;
  apikey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<News key='general' pageSize={this.pageSize} country='in' category='general' apikey={this.apikey}/>}></Route>
            <Route exact path='/general' element={<News key='general' pageSize={this.pageSize} country='in' category='general' apikey={this.apikey}/>}></Route>
            <Route exact path='/business' element={<News key='business' pageSize={this.pageSize} country='in' category='business' apikey={this.apikey}/>}></Route>
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' apikey={this.apikey}/>}></Route>
            <Route exact path='/health' element={<News key='health' pageSize={this.pageSize} country='in' category='health' apikey={this.apikey}/>}></Route>
            <Route exact path='/science' element={<News key='science' pageSize={this.pageSize} country='in' category='science' apikey={this.apikey}/>}></Route>
            <Route exact path='/sports' element={<News key='sports' pageSize={this.pageSize} country='in' category='sports' apikey={this.apikey}/>}></Route>
            <Route exact path='/technology' element={<News key='technology' pageSize={this.pageSize} country='in' category='technology' apikey={this.apikey}/>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}
