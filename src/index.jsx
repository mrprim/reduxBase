import WebFont from 'webfontloader';
import 'font-awesome-webpack';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.jsx';

WebFont.load({google: {families: ['Droid Sans', 'Droid Serif']}});

ReactDOM.render(<AppContainer/>, document.getElementById('Main'));
