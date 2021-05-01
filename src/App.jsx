import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import CapitalFinder from './components/CapitalFinder.jsx';

// Main Entry point function
function App() {
	return <BrowserRouter>
				<div>
					<div id="headerPanel">
						<Nav className="justify-content-center" as='ul'>
							<Nav.Item as="li">
								<Link to={'/CapitalFinder'}>City Data</Link>
							</Nav.Item>
						</Nav>
					</div>
					<div id="switchPanel">
						<Switch>
							<Route path='/CapitalFinder' component={CapitalFinder} />
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