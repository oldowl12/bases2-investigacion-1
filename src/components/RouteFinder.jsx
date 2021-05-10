import { axiosInstance } from '../config';
import React, { Fragment, Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import PlaceList from './placeList.jsx';

export default class RouteFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place1: '',
            place2: '',
            route: [],
            search: false
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.calculateRoute = this.calculateRoute.bind(this);
        this.printRoute = this.printRoute.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        console.log("mounted");
    }

    handleChange1(e) {
        this.setState({place1: e})
        if(this.state.place2!='' && !this.state.search){
            this.setState({search: true});
        }
    }

    handleChange2(e) {
        this.setState({place2: e})
        if(this.state.place1!='' && !this.state.search){
            this.setState({search: true});
        }
    }

    calculateRoute() {
        console.log('calculating route');
        if(this.state.place1 != '' && this.state.place2 != ''){
            axiosInstance.get(`/api/getRoute/${this.state.place1}/${this.state.place2}`).then(res => {
                console.log('data: ', res.data.route);
                this.setState({ route: res.data.route, search: false});
            });
        }else{
            return false
        }
    }

    printRoute() {
        let r = [];
        this.state.route.forEach(element => {
            r.push(<p>{element.name}</p>)
            r.push(<p> &#8594;</p>)
        });
        r.pop()
        console.log(r);
        return r;
    }

    render() {
        if(this.state.search) this.calculateRoute();
        return (
            <Fragment>
                <h1>Buscador de ruta de avion</h1>
                <hr/>
                <div className="horizontal">
                    <div><PlaceList onCapitalChange={this.handleChange1}/></div>
                    <div><PlaceList onCapitalChange={this.handleChange2}/></div>
                </div>
                <div className="horizontal">
                    <h1>{this.state.place1} &#8594; {this.state.place2}</h1>
                </div>
                <div className="horizontal">
                    {this.printRoute()}
                </div>
                
            </Fragment>
        )
    }
}