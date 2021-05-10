import { axiosInstance } from '../config';
import React, { Fragment, Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
export default class placeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			continents: [],
			selectedContinent: '',
			countries: [],
			selectedCountry: '',
			capitals: [],
			selectedCapital: ''
		}
		this.onChangeContinent = this.onChangeContinent.bind(this);
		this.onChangeCountry = this.onChangeCountry.bind(this);
		this.onChangeCapital = this.onChangeCapital.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	componentDidMount() {
		console.log('loading continents');
		axiosInstance.get(`/api/getContinents`).then(res => {
			this.setState({ continents: res.data.continents });
		});
		console.log("mounted");

	}

	loadContinents() {
		console.log('showing continents');
		let forms = []
		this.state.continents.forEach(continent => {
			forms.push(<option key={continent._key}>{continent.name}</option>);
		});
		return forms;
	}

	loadCountries() {
		console.log('showing countries');
		let forms = []
		this.state.countries.forEach(country => {
			forms.push(<option key={country._key}>{country._from.replace("worldVertices/country-", '')}</option>);
		});
		return forms;
	}

	loadCapitals() {
		console.log('showing capitals');
		let forms = []
		this.state.capitals.forEach(capital => {
			forms.push(<option key={capital._key}>{capital._from.replace("worldVertices/capital-", '')}</option>);
		});
		return forms;
	}

	onChangeContinent(e) {
		let selectedContinent = e.target.value;
		console.log('loading countries');
		if (selectedContinent != '') {
			axiosInstance.get(`/api/getCountries/${selectedContinent}`).then(res => {
				this.setState({ countries: res.data.countries, selectedContinent: selectedContinent, selectedCountry: '', selectedCapital: '' });
			});
		} else {
			this.setState({ selectedContinent: '', selectedCountry: '', selectedCapital: '' });
		}

		return true;
	}
	onChangeCountry(e) {
		let selectedCountry = e.target.value;
		console.log('loading capital');
		if (selectedCountry != '') {
			axiosInstance.get(`/api/getCapital/${selectedCountry}`).then(res => {
				this.setState({ capitals: res.data.capital, selectedCountry: selectedCountry, selectedCapital: '' });
			});
		} else {
			this.setState({ selectedCountry: '', selectedCapital: '' });
		}
		return true;
	}
	onChangeCapital(e) {
		let selectedCapital = e.target.value;
		this.props.onCapitalChange(selectedCapital);
	}

	render() {
		return (
			<Fragment>
				<div>
					<Form>
						<Form.Group controlId="MainForm.ContinentSelect">
							<Form.Label style={{ textAlign: 'center', marginBottom: '10px' }}> Select a continent: </Form.Label>
							<Form.Control name="continentSelect" as="select" size="lg" onChange={this.onChangeContinent}>
								<option></option>
								{this.loadContinents()}
							</Form.Control>
						</Form.Group>
						{this.state.selectedContinent != '' &&
							<Form.Group controlId="MainForm.CountrySelect">
								<Form.Label style={{ textAlign: 'center', marginBottom: '10px' }}> Select a country: </Form.Label>
								<Form.Control name="countrySelect" as="select" size="md" onChange={this.onChangeCountry}>
									<option key=""></option>
									{this.loadCountries()}
								</Form.Control>
							</Form.Group>
						}
						{this.state.selectedCountry != '' &&
							<Form.Group controlId="MainForm.capital">
								<Form.Label style={{ textAlign: 'center', marginBottom: '10px' }}> Select a Capital: </Form.Label>
								<Form.Control name="capitalSelect" as="select" size="sm" onChange={this.onChangeCapital}>
									<option></option>
									{this.loadCapitals()}
								</Form.Control>
							</Form.Group>
						}
					</Form>
				</div>
			</Fragment>
		)
	}
}