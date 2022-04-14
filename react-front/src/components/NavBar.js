import React from 'react';

const Navbar = ({brand}) => {
    return ( 
        <div className ="navbar-container">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                <ul className="nav navbar-nav">
                    <li><a id="len1" className="navbar-brand" href="#">{brand}</a></li>
                </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;