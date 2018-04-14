import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import Wrapper from './containers/Routes';
import registerServiceWorker from './helpers/registerServiceWorker';

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
