import React, {Component} from 'react';
import Posts from '../../providers/postsProvider';
import LiveFeed from '../../components/feed/liveFeed';
import './locationPage.css';
import Navbar from '../../components/navbar/navbar';
import {injector} from "react-services-injector";

class LocationPage extends Component {


    constructor(props) {
        super(props);
    }

    render() {

        this.services.searchService.setSearch('McDonalds');
        return (

            <div className={"locationPage"}>
                <Navbar/>
                <div className="location-info">
                    <img className="location-image" src={'/images/mcdonalds.jpg'}></img>
                    <h1 className={"location-name"}>{'McDonalds - Glen Allen'}</h1>
                    <h3 className={"location-description"}>{'McDonald\'s is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States'}</h3>
                    <h3>Average shift reviews: 4.7</h3>
                    <h3>Address: 11311 Nuckols Rd, Glen Allen, VA 23059</h3>
                </div>
                <div>
                    <LiveFeed/>
                </div>

            </div>

        );
    }
}

export default injector.connect(LocationPage, {
    toRender: []
});