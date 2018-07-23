import React, {Component} from 'react';
import Posts from '../../providers/postsProvider';
import PostDetailCss from './postDetail.css';

class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postId: props.postId
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState((prevState) => {
            postId: nextProps.postId;
        });
    }

    getPostBody(postId) {
        let post = Posts.getPosts().find(function(element) {
            return element.postId = postId;
        });
        console.log(postId);
        if(post) {
            return (
                <div>
                    <div>
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
        } else {
            return <div/>
        }
    }

    render() {
        return (

            <div className={"PostDetail"}>{this.getPostBody(this.state.postId)}</div>

        );
    }
}

export default PostDetail;