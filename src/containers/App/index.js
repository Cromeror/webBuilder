import React, { Component } from 'react';
import Login from '../Login'
import {

} from 'antd'

require('./index.scss')
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='app'>
                <Login />
            </div>
        );
    }
};

export default (App);