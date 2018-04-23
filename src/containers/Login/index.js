import React, { Component } from 'react';
import { Form } from 'antd';
import LoginBox from './LoginBox.component'

require('./index.scss')
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginBox />
            </div>
        );
    }
};

export default Login