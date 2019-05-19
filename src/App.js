import React from 'react';

import Home from './components/Home';
import Workout from './components/Workout';
import {
    Router,
    Scene,
} from 'react-native-router-flux';

import {
    Platform
} from 'react-native';

class App extends React.Component {
    render() {
        return(
            <Router>
                <Scene key = 'root' style = {{paddingTop: 64}}>
                    <Scene key = 'home' component = {Home} title = 'Home' />
                    <Scene key = 'workout' component = {Workout} title = 'Workout' />
                </Scene>
            </Router>
        )
    }
}

export default App;