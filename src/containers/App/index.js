import React, { Component } from 'react';
import Login from '../Login'

require('./index.scss')
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Login />
            </div>
        );
    }
};

export default (App);