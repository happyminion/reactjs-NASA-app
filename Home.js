import React, { Component } from 'react';
import Canvas from "./Canvas";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="container-fluid" id="home">
                <div className="row">
                    <div className="ml-auto">
                        <ReactCSSTransitionGroup
                            transitionName='canvas'
                            transitionAppear={true}
                            transitionAppearTimeout={2500}
                            transitionEnter={true}
                            transitionLeave={true}>
                        <Canvas />
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
                <div className="row">

                    <ReactCSSTransitionGroup
                        transitionName='example'
                        transitionAppear={true}
                        transitionAppearTimeout={2500}
                        transitionEnter={true}
                        transitionLeave={true}>
                        <p className="fixed-bottom col-xl-4">Explore the space</p>
                    </ReactCSSTransitionGroup>
                </div>

            </div>
        );
    }
}

export default Home;
