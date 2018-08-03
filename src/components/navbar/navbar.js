import React, { Component } from 'react';
import './navbar.css';
import {Redirect} from 'react-router-dom';
import {injector} from 'react-services-injector';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            searchTerm: ''
        }

        this.onSearch = this.onSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    setRedirect = (to) =>{
        this.setState({
            redirect: to
        });
    }

    renderRedirect() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect}/>;
        }

    }

    setSearch(to) {
        this.services.searchService.setSearch(to);
        console.log('search ' + this.services.searchService.search);
        this.setRedirect('/');
    }

    onSearch(event) {
        event.preventDefault();
        this.setSearch(this.state.searchTerm);
        console.log(this.state.searchTerm);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div className="Navbar">
                {this.renderRedirect()}
                <ul>
                    <li className="clickable" onClick={()=>this.setSearch('')}>Home</li>
                    <form className="form-wrapper">
                        <input name="searchTerm" type="text" id="search" placeholder="Search for..." value={this.state.searchTerm} onChange={this.handleInputChange} required onSubmit={this.onSearch}/>
                        <input type="submit" value="go" id="submit" onClick={this.onSearch}/>
                    </form>
                    <li className="clickable" onClick={()=>this.setSearch('shift review')}>Shift reviews</li>
                    <li className="clickable" onClick={()=>this.setSearch('shift meal')}>Shift meals</li>
                    <li className="clickable" onClick={()=>this.setSearch('snagger story')}>Snagger stories</li>
                    <li className="clickable">Message a snagger</li>
                    <br/>
                    <a href="create"><li className="clickable" onClick={()=>this.setRedirect('/create')}>Create a post</li></a>
                </ul>
            </div>
        )
    }
}

export default injector.connect(Navbar, {
    toRender: []
});