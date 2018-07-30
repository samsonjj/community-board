import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home/homePage';
import CreatePostPage from './pages/createPost/createPostPage';
import PostDetailPage from './pages/postDetail/postDetailPage';
import ReportPage from './pages/report/reportPage';
import RedirectPage from './pages/redirectPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import LocationPage from './pages/location/locationPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    setRedirect = () => {
        console.log('message');
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to={'/'} />
        }
    }



  render() {
    return (
      <div className="App">
        <div className="home-header">
            <img onClick={this.setRedirect} width="100%" src="/images/snagwork.PNG" position="fixed" alt={'favicon.ico'}/>
        </div>

          <select className={'space-select'}>
              <option>Richmond, Virginia</option>
              <option>D.C.</option>
              <option>Dallas, Texas</option>
          </select>
          <Router>
            <div>
                {this.renderRedirect()}
                <Route path="/create" component={CreatePostPage}/>
                <Route path="/post/:postId" component={PostDetailPage}/>
                <Route path="/report/:postId" component={ReportPage}/>
                <Route path="/redirect" component={RedirectPage}/>
                <Route path="/location" component={LocationPage}/>
                <Route exact path="/" component={HomePage}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
