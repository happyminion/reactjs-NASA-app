import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NasaImage from './NasaImage';
import MarsRover from './MarsRover';

class Main extends Component {


    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/nasa-image' component={NasaImage}/>
                <Route path='/mars-rover' component={MarsRover}/>
            </Switch>
        );
    }
}

export default Main;