import React, { Component } from 'react';
import postCss from './post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postBody: this.postBody(props.post)
        }
    }

    postBody(post) {
        return (
        <div>
            <div className="post-titleBar">
            <img className="post-userImage" src={post.userImage}></img>
            <p className="post-username">{post.username + " posted " + post.timePassed + " ago"}</p>

            <p className="post-title">{post.title}</p>
            </div>
            <p className="post-body">{post.body}</p>
            <div className="post-actions">
                <span>Read More</span>
                <span>Like</span>
            </div>
        </div>
        )
    }

    render() {
        return (
            <div className="Post">
                {this.state.postBody}
            </div>
        )
    }
}

export default Post;