import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home/homePage';
import CreatePostPage from './pages/createPost/createPostPage';
import PostDetailPage from './pages/postDetail/postDetailPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="home-header">
            <img width="100%" src="/images/snagwork.PNG" position="fixed"/>
        </div>
          <Router>
            <div>
                <Route path="/home" component={HomePage}/>
                <Route path="/create" component={CreatePostPage}/>
                <Route path="/post/:postId" component={PostDetailPage}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
