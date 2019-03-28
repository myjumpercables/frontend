import React, { Component } from 'react';
import './App.css';
import './account/AccountView'
import AccountView from './account/AccountView';

class App extends Component {
  render() {
    return (
        <>
          <AccountView></AccountView>
        </>
    );
  }
}

export default App;
