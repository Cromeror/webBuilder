import React, { Component } from 'react';
import {
    Button
} from 'antd'

require('./index.scss')
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Home<Button>Log out</Button></div>
        );
    }
};

export default Home