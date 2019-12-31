import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
         Navbar {" "} 
         <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
