import React, { Component } from 'react';
import {
    Row,
    Col
} from 'antd';
import LoginBox from './LoginBox.component'

require('./index.scss')
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login'>
                <Row className='row-full-height' type="flex" justify='center' align="middle">
                    <Col>
                        <LoginBox />
                    </Col>
                </Row>
            </div>
        );
    }
};

export default Login