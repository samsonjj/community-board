import React, { Component } from 'react';
import postCss from './post.css';
import PostsProvider from '../../providers/postsProvider';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
            postBody: this.postBody(props.post)
        }

        this.onLike = this.onLike.bind(this);
    }

    renderTags(post) {
        if(!post.tags) {
            return <div className={"tags"}></div>
        } else {
            let tags = post.tags.map(t => <span className={"tag"}>{t}</span>)
            return <div className={"tags"}>{tags}</div>
        }
    }

    renderBody(post) {
        const characterCap = 150;
        if(!post.body) {
            <p className="post-body"></p>
        } else {
            if(post.body.length <= 150) {
                return <p className="post-body">{post.body}</p>
            } else {
                return <p className="post-body">{post.body.substr(0, 150) + '. . . '}<a href="https://google.com">read more</a></p>
            }
        }
    }

    onLike(event) {
        PostsProvider.updatePost(this.state.post.id, 'likes', this.state.post.likes + 1);
        this.refresh();
    }

    refresh() {
        var post = PostsProvider.getPosts().find(p => this.state.post.id == p.id);
        this.setState((prevState) => {
            return {
            post: post,
            postBody: this.postBody(post)
        }});
    }


    postBody(post) {
        return (
        <div>
            <div className="post-titleBar">
                <div className={"post-likes"}>{post.likes}<img src={"/images/thumbs-up.png"}></img></div>
                <img className="post-userImage" src={post.userImage}></img>
                <p className="post-username">{post.username + " posted " + post.timePassed + " ago"}</p>
                <p className="post-title">{post.title}</p>
                {this.renderTags(post)}
            </div>

            <div className={"post-body-container"}>
                {this.renderBody(post)}
            </div>

            <div className="post-actions">
                <span>Comments</span>
                <span className={"clickable"} onClick={() => this.onLike()}>Like</span>
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