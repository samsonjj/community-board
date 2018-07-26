import React, {Component} from 'react';
import CommentsCss from './comments.css';

export default class Comments extends Component {

    constructor(props) {
        super(props);
        let comments = props.post.comments;
        for(let i = 0; i < comments.length; i++) {
            comments[i].minimized = false;
        }
        this.state = {
            comments: comments,
            commentsArray: []
        }
    }


    componentDidMount() {
        this.setState((prevState) => {
            console.log(prevState.comments);
            return({
                commentsArray: prevState.comments.map(comment => {
                    return (
                        <div className={'comment'}>
                            <div className={'comment-user'}>
                                <img className={'comment-userImage'} src={comment.userImage}/>
                                <p className={'comment-username'}>{comment.username}</p>
                            </div>
                            <div className={'comment-body'}>{comment.body}</div>
                            <div className={'comment-actions'}>
                                <img src={'/images/thumbs-up.png'}/>
                            </div>
                        </div>
                    )
                })
            })
        })
    }

    render() {
        return (
            <div className={'Comments'}>
                {this.state.commentsArray}
            </div>
        )
    }
}