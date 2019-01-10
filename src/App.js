import React, { Component } from 'react';
import './App.css';
import Container from './Container/Container';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from './reducers/reducers'
const store = createStore(reducers);
class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
      <Container></Container>
      </Provider>
    );
  }
}

export default App;
