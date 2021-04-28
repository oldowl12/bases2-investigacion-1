import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import 'react-bootstrap/dist/react-bootstrap.min.js';
import './App.css';

import Example from './components/Example.jsx';

// Main Entry point function
function App() {
	return <BrowserRouter>
				<div>
					<div id="headerPanel">
						<Nav className="justify-content-center" as='ul'>
							<Nav.Item as="li">
								<Link to={'/Example'}>Ejemplo</Link>
							</Nav.Item>
						</Nav>
					</div>
					<div id="switchPanel">
						<Switch>
							<Route path='/Example' component={Example} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>;
}

/**
 * TODO:
 * add routing configuration
 * add redux or any other state manager
 * check out any best practises
 */

// Rendering the entire react application
ReactDOM.render(<App/>, document.getElementById('root'));