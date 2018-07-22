import React, { Component } from 'react';
import navbarCss from './navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div className="Navbar">
                <p>Navbar</p>
                <ul>
                    <li>Search for a post</li>
                    <input type="text"></input>
                    <li className="clickable">Something</li>
                    <li className="clickable">Something else</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;