import Axios from 'axios';
import React, {Fragment} from 'react';

export default function Example() {
	Axios.get(`/api/arangoTest`).then(res =>{
		console.log(res.data);
	});
	return (
		<Fragment>
			<h2 style={{textAlign: 'center', marginBottom: '10px'}}> Hello React Express World </h2>
			<span style={{display: 'block', textAlign: 'center'}}> Thank you for using create-app-react-express </span>
			<span style={{display: 'block', textAlign: 'center', marginTop: '25px'}}> If you have any suggestions or found any bugs, </span>
			<span style={{display: 'block', textAlign: 'center'}}> please email me at: <i style={{color: '#007bff'}}> valchygaming@gmail.com </i> </span>
			<span  style={{display: 'block', textAlign: 'center'}}></span>
		</Fragment>
	);
}