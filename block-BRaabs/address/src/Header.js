import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <section className="hero is-dark has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title"> 📑 Learning About Forms</h1>
            <h2 className="subtitle">Controlled vs Uncontrolled Component</h2>
          </div>
        </div>
      </section>
    );
  }
}
