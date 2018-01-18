import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import GameWeb from './reducer/reducer.js';
import { putMark, isGameEnd, playAgainOOXX } from './action.js';

import LoginPage from './Components/Containers/loginContainer.js';

let store = createStore(GameWeb);
// ReactDOM.
ReactDOM.render(
	<Provider store = {store}>
		<LoginPage />
	</Provider>,
	document.getElementById('app')
	);

