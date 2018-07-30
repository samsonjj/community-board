import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injector} from 'react-services-injector';
import services from './services';

import posts from './stubs/betterPosts';
if(localStorage.getItem('posts') === '' || localStorage.getItem('posts') === undefined) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

var version = 12;

if(localStorage.getItem('version') !== version) {
    localStorage.setItem('posts', JSON.stringify(posts));
    localStorage.setItem('version', version);
}

injector.register(services);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
