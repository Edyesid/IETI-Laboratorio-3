import React, {Component} from 'react';
import DrawerLeft from './components/DrawerLeft';
import {Login} from './components/Login';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const LoginView = () => (
            <Login />
        );

        const DrawerView = () => (
            <DrawerLeft />
        );

        return (
            <Router>
                <div className="App">
                    <div>
                        {!localStorage.getItem("isLoggedIn") && LoginView()}
                        {localStorage.getItem("isLoggedIn") && DrawerView()}
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;