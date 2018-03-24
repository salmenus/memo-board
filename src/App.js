import React, { Component } from 'react';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={'app'}>
        <Header />
        <main>
          Main
        </main>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
