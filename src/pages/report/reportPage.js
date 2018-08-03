import React, {Component} from 'react';
import Navbar from '../../components/navbar/navbar';
import Post from '../../components/feed/post';
import PostsProvider from '../../providers/postsProvider';
import './reportPage.css';
import {Redirect} from 'react-router-dom';

export default class ReportPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postId: props.match.params.postId,
            redirect: null
        }
        console.log(props.match.params.postId);

        this.onSubmitReport = this.onSubmitReport.bind(this);
    }

    onSubmitReport(event) {
        event.preventDefault();
        this.setState({
            redirect: '/redirect'
        });
        console.log('oh yeah');
    }

    render() {
        let redirect = '';
        console.log(this.state.redirect);
        if(this.state.redirect === '/redirect') {
            redirect = <Redirect to={
                {
                    pathname: this.state.redirect,
                    state: {
                        message: "Thank you for your help in keeping our site clean",
                        timer: 4
                    }
                }
            }/>
        }
        return (
            <div className={'ReportPage'}>
                {redirect}
                <Navbar/>
                <form className={'report-container'}>
                    <Post post={PostsProvider.getPosts().find(post=>post.id === this.state.postId)}/>
                    <h1>Submit a report</h1>
                    <select className={'report-reason'}>
                        <option value={'explicit content'}>explicit content</option>
                        <option value={'harassment'}>harassment</option>
                        <option value={'false information'}>false information</option>
                        <option value={'spam'}>spam</option>
                        <option value={'hate speech'}>hate speech</option>

                        <option value={'other'}>other</option>
                    </select>
                    <label>Tell us about the report</label><br/>
                    <textarea className="input-body" type="text" placeholder="body" name="body" onChange={this.handleInputChange}/><br/>
                    <button onClick={this.onSubmitReport} type={'submit'}>Submit</button>
                </form>
            </div>
        )
    }

}