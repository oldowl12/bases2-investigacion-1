import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import RouteFinder from './components/RouteFinder.jsx';

// Main Entry point function
function App() {
	return	<div>
				<RouteFinder></RouteFinder>
			</div>;

}

/**
 * TODO:
 * add routing configuration
 * add redux or any other state manager
 * check out any best practises
 */

// Rendering the entire react application
ReactDOM.render(<App/>, document.getElementById('root'));