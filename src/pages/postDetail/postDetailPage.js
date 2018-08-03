import React, { Component } from 'react';
import './postDetailPage.css'
import Posts from "../../providers/postsProvider";
import PostDetail from '../../components/feed/postDetail';
import Post from '../../components/feed/post';
import Navbar from '../../components/navbar/navbar';
import Comments from '../../components/feed/comments';
import UserProvider from '../../providers/userProvider';

class PostDetailPage extends Component {

    constructor(props) {
        super(props);
        let postId = this.props.match.params.postId;
        let post = Posts.getPosts().find(function(element) {
            return element.id === postId});
        this.state = {
            commentBody: '',
            post: post,
            comments: <Comments post={post}></Comments>
        }
        console.log(Posts.getPosts());
        console.log(postId);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmitComment = this.onSubmitComment.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmitComment(event){
        event.preventDefault();
        console.log('in function');
        let postId = this.props.match.params.postId;
        let post = Posts.getPosts().find(function(element) {
            return element.id === postId});
        console.log(post);
        let prevComments = post.comments;
        console.log(prevComments);
        prevComments.push({
            body: this.state.commentBody,
            username: UserProvider.getUser().username,
            userImage: UserProvider.getUser().userImage
        });
        Posts.updatePost(postId, 'comments', prevComments);
        console.log(this.state);
        post.comments.push({
            body: this.state.commentBody,
            username: UserProvider.getUser().username,
            userImage: UserProvider.getUser().userImage
        });
        this.setState((prevState) => {
            return {
                comments: <Comments post={post}></Comments>
            }
        });
        console.log(this.state);
    }



    render() {
        let post = this.state.post;
        console.log(post);
        return (
            <div className="PostDetailPage">
                <Navbar></Navbar>
                <div className={'detail-post-container'}>
                    <Post post={post}></Post>
                </div>
                <form className="comment-form" onSubmit={this.onSubmitComment}>
                    <textarea placeholder="Write a comment" className="comment-input-body" type="text" value={this.state.commentBody} name="commentBody" onChange={this.handleInputChange}/>
                    <button className="comment-submit" type={'submit'}>Submit</button>
                </form>
                {this.state.comments}
            </div>
        )
    }

}

export default PostDetailPage;