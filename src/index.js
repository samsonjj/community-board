import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import posts from './stubs/posts';
if(localStorage.getItem('posts') == undefined) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
