import React, { Component } from 'react';
import PostDetail from '../../components/feed/postDetail';
import postDetailPageCss from './postDetailPage.css'

class PostDetailPage extends Component {

    render() {
        return (
            <div className="PostDetailPage">
                <PostDetail postId={this.props.match.params.postId}></PostDetail>
            </div>
        )
    }

}

export default PostDetailPage;