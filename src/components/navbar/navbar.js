import React, { Component } from 'react';
import navbarCss from './navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div className="Navbar">
                <ul>
                    <li>Search for a post</li>
                    <input type="text"></input>
                    <li className="clickable">Location reviews</li>
                    <li className="clickable">Best lunches</li>
                    <li className="clickable">Snagger stories</li>
                    <li className="clickable">Message a snagger</li>
                    <br/>
                    <a href="create"><li className="clickable">Create a post</li></a>
                </ul>
            </div>
        )
    }
}

export default Navbar;