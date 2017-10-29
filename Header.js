import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends Component {
    render() {
        return (
            <div className="containerHeader">
                <nav className="navbar navbar-expand-xl">

                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item active">
                                <ReactCSSTransitionGroup
                                    transitionName='navigation'
                                    transitionAppear={true}
                                    transitionEnter={true}
                                    transitionLeave={true}>
                                    <Link to='/' className="nav-link">Home</Link>
                                </ReactCSSTransitionGroup>
                            </li>
                            <li className="nav-item active">
                                <ReactCSSTransitionGroup
                                    transitionName='navigation'
                                    transitionAppear={true}
                                    transitionEnter={true}
                                    transitionLeave={true}>
                                    <Link to='/nasa-image' className="nav-link">NASA Image</Link>
                                </ReactCSSTransitionGroup>
                            </li>
                            <li className="nav-item">
                                <ReactCSSTransitionGroup
                                    transitionName='navigation'
                                    transitionAppear={true}
                                    transitionEnter={true}
                                    transitionLeave={true}>
                                <Link to='/mars-rover' className="nav-link">Mars Rover</Link>
                                </ReactCSSTransitionGroup>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;