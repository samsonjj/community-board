import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import LiveFeed from '../../components/feed/liveFeed';
import './homePage.css';

class HomePage extends Component {
    render() {
        let params = new URLSearchParams(this.props.location.search);
        let searchTerm = params.get('search');
        console.log('searchTerm: ' + searchTerm);

        return (
            <div className="HomePage">
                <Navbar></Navbar>
                <LiveFeed search={searchTerm || null}></LiveFeed>
            </div>
        )
    }
}

export default HomePage;