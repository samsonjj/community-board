import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class RedirectPage extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.location.state;
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({
                redirect: '/'
            });
        }.bind(this), 4000);
        setInterval(function() {
            this.setState((prevState) => { return {
                timer: --prevState.timer
            }});
        }.bind(this), 1000);
    }


    render() {

        let redirect = '';
        if(this.state.redirect) {
            redirect = <Redirect to={this.state.redirect}/>
        }
        return (
            <div>
                {redirect}
                <br/><br/><br/><br/>
                <h1 className={'redirect-message'}>{this.state.message}</h1>
                <h1 className={'redirect-message'}>You will be redirected in {this.state.timer}</h1>
            </div>
        )
    }
}