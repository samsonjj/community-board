import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import LiveFeed from '../../components/feed/liveFeed';
import './homePage.css';
import PostsProvider from '../../providers/postsProvider';
import Post from '../../components/feed/post';

class HomePage extends Component {
    render() {
        let params = new URLSearchParams(this.props.location.search);
        let post = PostsProvider.getPosts().find(p => p.id === '777');
        return (
            <div className="HomePage">
                <Navbar></Navbar>
                <LiveFeed></LiveFeed>
                <div className={'featured-post'}>
                    <h1>Featured post</h1>
                    <Post post={post}></Post>
                </div>
            </div>
        )


    }
}

export default HomePage;