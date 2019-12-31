import React from "react";


const Navbar = (props) => {
    console.log(props)
    return (    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
           Navbar {" "} 
           <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
          </a>
        </nav>
      );
}
 
export default Navbar;

