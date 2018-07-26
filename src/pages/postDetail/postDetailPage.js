import React, { Component } from 'react';
import PostDetail from '../../components/feed/postDetail';
import postDetailPageCss from './postDetailPage.css'
import Posts from "../../providers/postsProvider";
import Post from '../../components/feed/post';
import Navbar from '../../components/navbar/navbar';
//import Comments from '../../components/feed/comments';

class PostDetailPage extends Component {

    render() {
        let postId = this.props.match.params.postId;
        console.log(Posts.getPosts());
        console.log(Posts.getPosts().find(function(element) {return element.id == postId}));
        console.log(postId);
        return (
            <div className="PostDetailPage">
                {console.log(postId)}
                <Navbar></Navbar>
                <div className={'detail-post-container'}>
                    <Post post={Posts.getPosts().find(function(element) {return element.id == postId})}></Post>
                </div>
                <div></div>
            </div>
        )
    }

}

export default PostDetailPage;