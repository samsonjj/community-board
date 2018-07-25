import React, {Component} from 'react';
import Posts from '../../providers/postsProvider';
import LiveFeed from '../../components/feed/liveFeed';
import Locations from '../../providers/locationsProvider';

class LocationPage extends Component {


    constructor(props) {
        super(props);
        let locationName = this.props.match.params.name;
        let locations = Locations.getLocations();
        let location = locations.find(loc => loc.name === locationName);
        this.state.location = location;
    }

    render() {
        return (

            <div className={"locationPage"}>
                <div classname="location-info">
                    <img className="location-image" src={this.state.location.locationImage}></img>
                    <h1 className={"location-name"}>{this.location.name}</h1>
                    <h2 className={"location-description"}>{this.state.location.description}</h2>
                </div>
                <LiveFeed search={this.state.location.name}/>

            </div>

        );
    }
}