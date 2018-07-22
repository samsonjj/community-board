import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import LiveFeed from '../components/feed/liveFeed';

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">

                <p>Home Pages</p>
                <Navbar></Navbar>
                <LiveFeed></LiveFeed>

            </div>
        )
    }
}

export default HomePage;