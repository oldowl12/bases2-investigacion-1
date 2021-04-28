import {axiosInstance} from '../config';
import React, {Fragment, Component} from 'react';

export default class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		}
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	componentDidMount(){
		console.log("mounted");
		axiosInstance.get(`/api/arangoTest`).then(res =>{
			this.setState({data: res.data});
		});
	}

	render() {
		
		return (
			<Fragment>
				<h2 style={{textAlign: 'center', marginBottom: '10px'}}> Hello React Express World </h2>
				<span style={{display: 'block', textAlign: 'center', marginTop: '25px'}}>{this.state.data.message}</span>
			</Fragment>
		)
	}
}