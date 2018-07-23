import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import LiveFeed from '../../components/feed/liveFeed';
import homePageCss from './homePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">


                <Navbar></Navbar>
                <LiveFeed></LiveFeed>

            </div>
        )
    }
}

export default HomePage;