import React, { Component } from 'react';
import Posts from '../../providers/postsProvider';
import Post from './post';

import liveFeedCss from './liveFeed.css';

class LiveFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postsArray: []
        };
    }

    componentDidMount() {
        let postsArray = Posts.getPosts();

        this.setState((prevState) => (
            {
                posts: postsArray.map(
                    post => (
                        <Post post={post}></Post>
                    ))
            }
        ));
    }

    render() {
        return (
            <div className="LiveFeed">
                {this.state.posts}
            </div>
        )
    }
}

export default LiveFeed;