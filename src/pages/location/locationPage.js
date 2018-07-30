import React, {Component} from 'react';
import Posts from '../../providers/postsProvider';
import LiveFeed from '../../components/feed/liveFeed';

export default class LocationPage extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className={"locationPage"}>
                <div classname="location-info">
                    <img className="location-image" src={'/images/mcdonalds.jpg'}></img>
                    <h1 className={"location-name"}>{'McDonalds'}</h1>
                    <h2 className={"location-description"}>{'McDonald\'s is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States'}</h2>
                </div>
                <LiveFeed search={'McDonalds'}/>

            </div>

        );
    }
}