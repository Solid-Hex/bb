import React, { Component } from 'react';
import './App.css';
import Library from './Library/Library';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons1: {
        type: 'lessons'
      },
      lessons2: {
        type: 'lessons-test'
      }
    };
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="bar">
            <a href="https://www.blackbullion.com">blackbullion</a>
          </div>
        </header>

        <section className="section grid">
          <div className="page-heading"><h1>Lockdown Lessons</h1></div>
            <Library library={this.state.lessons1} />
          <div className="clear"></div>
        </section>

        <footer className="footer">&copy;2021</footer>
      </div>
    );
  }
}

export default App;
