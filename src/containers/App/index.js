import React, { Component } from 'react';
import Login from '../Login';
import Dashboard from '../Dashboard';

require('./index.scss')
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='app'>
                <Dashboard />
            </div>
        );
    }
};

export default (App);