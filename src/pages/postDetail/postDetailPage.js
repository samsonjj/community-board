import React, { Component } from 'react';
import PostDetail from '../../components/feed/postDetail';
import postDetailPageCss from './postDetailPage.css'

class PostDetailPage extends Component {

    render() {
        return (
            <div className="PostDetailPage">
                {console.log(this.props.match.params.postId)}
                <PostDetail postId={this.props.match.params.postId}></PostDetail>
            </div>
        )
    }

}

export default PostDetailPage;