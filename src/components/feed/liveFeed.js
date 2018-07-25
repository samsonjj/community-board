import React, { Component } from 'react';
import PostsProvider from '../../providers/postsProvider';
import Post from './post';

import liveFeedCss from './liveFeed.css';

class LiveFeed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postsArray: []
        };
    }

    componentDidMount() {
        var posts = PostsProvider.getPosts();
            this.setState((prevState) => (
                {
                    postsArray: posts.filter(p => !this.props.search || (p.tags && p.tags.includes(this.props.search))).map(
                        post => (
                            <Post key={post.id} post={post}></Post>
                        ))
                }
            ));
    }

    render() {
        return (
            <div className="LiveFeed">
                {this.state.postsArray}
            </div>
        )
    }
}

export default LiveFeed;