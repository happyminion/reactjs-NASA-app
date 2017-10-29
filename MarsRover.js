import React, { Component } from 'react';
import axios from 'axios';
import './MarsRover.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {

    constructor(){
        super();
        this.state = {
            imageMars: [],
            cameraName: [],
            roverName: [],
            landingDate: []
        };
    }

    api = 'bOrnFBGDUsqRULhez8GUj1Rx56bVvmyPGyb4LLnb';

    randomImg = Math.floor(Math.random()*113);

    componentDidMount() {

        axios.get(
            'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&earth_date=2017-10-15&api_key=' + this.api)
            .then(function (response) {
                console.log(response);
                this.setState({
                    imageMars: response.data.photos[this.randomImg].img_src,
                    cameraName: response.data.photos[this.randomImg].camera.name,
                    roverName: response.data.photos[this.randomImg].rover.name,
                    landingDate: response.data.photos[this.randomImg].rover.landing_date
                });
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName='container'
                transitionAppear={true}
                transitionAppearTimeout={2500}
                transitionEnter={true}
                transitionLeave={true}>
            <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center" id="mars">
                    <img className="img-fluid" src={this.state.imageMars} alt="marsImg"/>
                    <div id="textBox">
                        <p>Camera name: {this.state.cameraName}</p>
                        <p>Rover name: {this.state.roverName}</p>
                        <p>Landing date: {this.state.landingDate}</p>
                    </div>
                </div>
            </div>
            </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default App;
