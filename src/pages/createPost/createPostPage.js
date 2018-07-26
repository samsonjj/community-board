import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import LiveFeed from '../../components/feed/liveFeed';
import createPostPageCss from './createPostPage.css';
import PostsProvider from '../../providers/postsProvider';
import {Redirect} from 'react-router-dom';

class createPostPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: '',
            title: "title",
            body: "body",
            tags: [],
            postType: false,
            location: 'Burger Bach',
            rating: 3
        }

        this.uniqueId = 7777777;

        this.createPost = this.createPost.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    createPost(event) {
        event.preventDefault();

        let body = this.state.postType == 'review' ?
            <div><p>Review: {this.state.location}<br/>Rating: {this.state.rating}<br/><br/>{this.state.body}</p></div> :
            <div>{this.state.body}</div>;

        PostsProvider.addPost({
            id: this.uniqueId++,
            title: this.state.title,
            body: body,
            likes: 0,
            comments: [],
            date: new Date(),
            tags: this.state.tags
        });
        alert('Your post has been submitted!');
        this.setRedirect();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        if(name === 'location' ) {
            this.setState({
                title: 'Review: ' + document.getElementsByClassName('input-location')[0].value
            });
        }
    }

    renderReviewPost() {
        let review;

        if(this.state.postType === 'review') {
            review =
                <div>
                    <label>Location</label>
                <select className="input-location" value={this.state.location} onChange={this.handleInputChange} name="location">
                    <option>Buger Bach</option>
                    <option>Five Guys</option>
                    <option>That Kitchen</option>
                </select><br/>
                    <label>Rating</label>
                    <select name="rating" value={this.state.rating} onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

        } else {
            review = '';
        }
        return review;
    }

    setRedirect() {
        this.setState({
            redirect: 'home'
        });
        console.log('done');
    }

    renderRedirect() {
        if(this.state.redirect === 'home') {
            return <Redirect to={"/"}></Redirect>
        }
    }

    render() {

        return (
            <div className="CreatePostPage">
                {this.renderRedirect()}
                <Navbar></Navbar>
                <div className="create-post-container">
                    <h2>Create your post</h2>
                    <select name="postType" onChange={this.handleInputChange}>
                        <option value="blank">blank</option>
                        <option value="review">review</option>
                    </select>
                    {this.renderReviewPost()}
                    <form onSubmit={this.createPost}>
                        <label>Title</label><br/>
                        <input className="input-title" type="text" value={this.state.title} name="title" onChange={this.handleInputChange}/><br/>
                        <label>Body</label><br/>
                        <input className="input-body" type="text" value={this.state.body} name="body" onChange={this.handleInputChange}/><br/>
                        <button type="submit">submit post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default createPostPage;