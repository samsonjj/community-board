import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injector} from 'react-services-injector';
import services from './services';

import posts from './stubs/posts';
if(localStorage.getItem('posts') === '' || localStorage.getItem('posts') === undefined) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

if(localStorage.getItem('version') !== '9') {
    localStorage.setItem('posts', JSON.stringify(posts));
    localStorage.setItem('version', '9');
}

injector.register(services);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
