import React, { Component } from 'react';
import {
    Form,
    Input,
    Button,
    Icon,
    Checkbox
} from 'antd';

require('./index.scss')
class LoginBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onSubmit } = this.props
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={onSubmit} className='login-form'>
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }
};

export default Form.create()(LoginBox)