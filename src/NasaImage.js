import React, { Component } from 'react';
import axios from 'axios';
import './css/NasaImage.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class NasaImage extends Component {

    constructor(){
        super();
        this.state = {
            image: [],
            credits:[],
            date: [],
            title: [],
            explanation: []
        };
    }

    api = 'bOrnFBGDUsqRULhez8GUj1Rx56bVvmyPGyb4LLnb';

    componentDidMount() {

        axios.get(
            'https://api.nasa.gov/planetary/apod?api_key=' + this.api)
            .then(function (response) {
                console.log(response);
                this.setState({
                    image: response.data.url,
                    credits: response.data.copyright,
                    date: response.data.date,
                    title: response.data.title,
                    explanation: response.data.explanation
                });
                console.log(response.data.copyright);
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
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center" id="nasaImg">
                            <img className="img-fluid" src={this.state.image} alt="nasaImg"/>
                            <p>{this.state.credits}</p>
                            <p>{this.state.date}</p>
                            <h3>{this.state.title}</h3>
                            <p>{this.state.explanation}</p>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default NasaImage;
