import React, { Component } from 'react';
import './App.css';
import './account/AccountView';
import './account/LoginView';
import AccountView from './account/AccountView';
import LoginView from './account/LoginView';

class App extends Component {
  render() {
    return (
        <>
          <LoginView></LoginView>
        </>
    );
  }
}

export default App;
