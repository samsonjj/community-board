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
            <p className="post-username">{post.username + " posted"}</p>
            <p className="post-timePassed">{post.timePassed + " ago"}</p>

            <p className="post-title">{post.title}</p>
            </div>
            <p className="post-body">{post.body}</p>
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