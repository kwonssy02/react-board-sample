import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
