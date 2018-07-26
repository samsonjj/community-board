import React, { Component } from 'react';
import './post.css';
import PostsProvider from '../../providers/postsProvider';
import {Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
            post: props.post,
            postBody: this.postBody(props.post)
        }

        this.onLike = this.onLike.bind(this);
    }

    renderTags(post) {
        if(!post.tags) {
            return <div className={"tags"}></div>
        } else {
            let tags = post.tags.map(t => {
                let style;
                switch(t) {
                    case 'shift review':
                        style = 'red';
                        break;
                    case 'snag lunch':
                        style = 'yellow';
                        break;
                }
                if(style === undefined) {
                    style = {};
                }
                else {
                    style = {
                        background: style
                    };
                }
                return <span className={"tag"} style={style}>{t}</span>
            })
            /*for(let i = 0; i < tags.length; i++) {
                let tag = ReactDOM.findDOMNode(tags[i]);
                if(tag.innerHTML === 'stuff') {
                    tag.style.background = 'red';
                }
            }*/
            return <div className={"tags"}>{tags}</div>
        }
    }

    renderBody(post) {
        /*const characterCap = 150;
        if(!post.body) {
            <p className="post-body"></p>
        } else {
            if(post.body.length <= 150) {
                return <p className="post-body">{post.body}</p>
            } else {
                return <p className="post-body">{post.body.substr(0, 150) + '. . . '}<a href="https://google.com">read more</a></p>
            }
        }*/
        return post.body;
    }

    onLike(event) {
        PostsProvider.updatePost(this.state.post.id, 'likes', this.state.post.likes + 1);
        this.refresh();
    }

    refresh() {
        var post = PostsProvider.getPosts().find(p => this.state.post.id === p.id);
        this.setState((prevState) => {
            return {
            post: post,
            postBody: this.postBody(post)
        }});
    }

    setRedirect(to) {
        this.setState({
            redirect: to
        });
    }

    renderRedirect() {
        if(this.state.redirect !== '') {
            return <Redirect to={this.state.redirect}></Redirect>;
        }
    }

    postBody(post) {
        return (
        <div>
            <div className="post-titleBar">
                <div className={"post-likes"}>{post.likes}<img src={"/images/thumbs-up.png"} alt={'/favicon.ico'}></img></div>
                <img className="post-userImage" src={post.userImage} alt={'/favicon.ico'}></img>
                <p className="post-username">{post.username + " posted " + post.timePassed + " ago"}</p>
                <p className="post-title" onClick={()=>this.setRedirect('post/' + post.id)}>{post.title}</p>
                {this.renderTags(post)}
            </div>

            <div className={"post-body-container"}>
                {this.renderBody(post)}
            </div>

            <div className="post-actions">
                <span className={"clickable"} onClick={() => this.setRedirect('post/' + post.id)}>Comments ({post.comments.length})</span>
                <span className={"clickable"} onClick={() => this.onLike()}>Like</span>
                <span>Report</span>
            </div>
        </div>
        )
    }

    render() {
        return (
            <div className="Post">
                {this.renderRedirect()}
                {this.state.postBody}
            </div>
        )
    }
}

export default Post;