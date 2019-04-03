import React, { Component } from 'react';
import './ManageAccount';
import './Login';
import { OfflineView } from './OfflineView'

  class App extends Component {
  render() {
    return (
        <>
          <OfflineView></OfflineView>
        </>
    );
  }
}

export default App;
