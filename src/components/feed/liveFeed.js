import React, { Component } from 'react';
import PostsProvider from '../../providers/postsProvider';
import Post from './post';
import {injector} from 'react-services-injector';

import './liveFeed.css';

class LiveFeed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postsArray: []
        };
    }

    componentDidMount() {
        var posts = PostsProvider.getPosts();
        console.log('search query ' + this.props.search);

        const {searchService} = this.services;
        let searchTerm = searchService.search;
        console.log(searchService.search);

        console.log(posts);

        this.setState((prevState) => (
            {
                postsArray: posts.filter(p => !searchTerm || (p.tags && p.tags.includes(searchTerm))).map(
                    post => {
                        console.log('tag search ' + post.tags);
                        return (
                            <Post key={post.id} post={post}></Post>
                        )
                    })
            }
        ));
    }

    getPostsArray() {
        var posts = PostsProvider.getPosts();

        const {searchService} = this.services;
        let searchTerm = searchService.search;
        console.log('rendering with ' + searchTerm);
        let result = posts.filter(p => !searchTerm || (p.tags && p.tags.includes(searchTerm))).map(
            post => (
                <Post key={post.id} post={post}></Post>
            )
        ).sort((a, b)=>{
            a = a.date;
            b = b.date;
            return a>b ? -1 : a<b ? 1 : 0;
        });

        return result;

    }

    render() {
        return (
            <div className="LiveFeed">
                {console.log('re render')}
                {this.getPostsArray()}
            </div>
        )
    }
}

export default injector.connect(LiveFeed, {
    toRender: ['searchService']
});