import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import LiveFeed from '../../components/feed/liveFeed';
import './homePage.css';

class HomePage extends Component {
    render() {
        let params = new URLSearchParams(this.props.location.search);

        return (
            <div className="HomePage">
                <Navbar></Navbar>
                <LiveFeed></LiveFeed>
            </div>
        )
    }
}

export default HomePage;