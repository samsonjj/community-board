import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import LiveFeed from '../../components/feed/liveFeed';
import createPostPageCss from './createPostPage.css';

class createPostPage extends Component {
    render() {
        return (
            <div className="HomePage">


                <Navbar></Navbar>
                <div>
                    <form>
                        <input type="text" value="title"/>
                        <input type="text" value="post body"/>
                    </form>
                </div>

            </div>
        )
    }
}

export default createPostPage;
