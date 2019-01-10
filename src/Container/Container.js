import React, { Component } from 'react';
import Header from './Header';
import Favorites from '../Favorites/Favorites';
import './Container.css'
import Search from '../Search/Search';

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
        <Header></Header>
        </div>
        <div className="search">
        <Search></Search>
        </div>
        <div className="favorites">
        <Favorites></Favorites>
        </div>
      </div>
    )
  }
}
