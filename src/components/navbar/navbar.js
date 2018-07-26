import React, { Component } from 'react';
import navbarCss from './navbar.css';
import {Redirect} from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    setRedirect = () =>{
        this.setState({
            redirect: true
        });
    }

    renderRedirect() {
        if(this.state.redirect) {
            return (
                <Redirect to='/create'/>
            )
        }
    }

    render() {
        return(
            <div className="Navbar">
                {this.renderRedirect()}
                <ul>
                    <li className="clickable">Home</li>
                    <form className="form-wrapper">
                        <input type="text" id="search" placeholder="Search for..." required/>
                        <input type="submit" value="go" id="submit"/>
                    </form>
                    <li className="clickable">Location reviews</li>
                    <li className="clickable">Best lunches</li>
                    <li className="clickable">Snagger stories</li>
                    <li className="clickable">Message a snagger</li>
                    <br/>
                    <a href="create"><li className="clickable" onClick={this.setRedirect}>Create a post</li></a>
                </ul>
            </div>
        )
    }
}

export default Navbar;