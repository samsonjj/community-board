import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import './createPostPage.css';
import PostsProvider from '../../providers/postsProvider';
import {Redirect} from 'react-router-dom';
import UserProvider from '../../providers/userProvider';
import autosize from 'autosize';

class createPostPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: '',
            title: "",
            body: "",
            tags: [],
            postType: 'snagger story',
            location: 'Burger Bach',
            rating: 3
        }

        this.uniqueId = 7777777;

        this.createPost = this.createPost.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    createPost(event) {
        event.preventDefault();
        console.log('umm');

        if(this.state.title === '') {
            alert('You must have a title');
            return;
        }
        if(this.state.body === '') {
            alert('You must have a body');
            return;
        }

        let post = {
            id: this.uniqueId++,
            username: UserProvider.getUser().username,
            userImage: UserProvider.getUser().userImage,
            title: this.state.title,
            body: <div>{this.state.body}</div>,
            likes: 0,
            comments: [],
            date: new Date(),
            tags: this.state.tags

        }

        if (this.state.postType === 'shift review') {
            post.body = <div><p>Review: {this.state.location}<br/>Rating: {this.state.rating}<br/><br/>{this.state.body}</p></div>;
            post.tags = this.state.tags.concat('shift review');
        }
        else if (this.state.postType === 'bug report') {

        }

        PostsProvider.addPost(post);


        alert('Your post has been submitted!');
        this.setRedirect();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;


        if(name === 'tags') {
            this.setState({
                tags: value.split(',').map(tag=> tag.trim())
            })
            return;
        }

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

        if(this.state.postType === 'shift review') {
            review =
                <div>
                    <label className={'select-description'}>Location</label>
                <select className="input-location" value={this.state.location} onChange={this.handleInputChange} name="location">
                    <option>Buger Bach</option>
                    <option>Five Guys</option>
                    <option>That Kitchen</option>
                </select><br/>
                    <label className={'select-description'}>Rating</label>
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
                    <h2 className={'create-title'}>Create your post</h2>
                    <p className={'select-description'}>What is your post about?</p>
                    <select name="postType" onChange={this.handleInputChange}>
                        <option value="snagger story">snagger story</option>
                        <option value="shift review">shift review</option>
                        <option value="snag lunch">snag lunch</option>
                        <option value="bug report">bug report</option>
                        <option value="other">other</option>

                    </select>
                    {this.renderReviewPost()}
                    <form onSubmit={this.createPost}>
                        <label>Title</label><br/>
                        <textarea className="input-title" type="text" placeholder="title" value={this.state.title} name="title" onChange={this.handleInputChange}/><br/>
                        <label>Body</label><br/>
                        <textarea className="input-body" type="text" placeholder="body" value={this.state.body} name="body" onChange={this.handleInputChange}/><br/>
                        <label>Tags</label><br/>
                        <input className="input-tags" type="text" placeholder="tags" name="tags" onChange={this.handleInputChange}/><br/>
                        <button type="submit">submit post</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default createPostPage;