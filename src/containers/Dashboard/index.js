import React, { Component } from 'react';
import {
    Layout,
    Menu,
    Breadcrumb,
    Icon
} from 'antd';
import WorkSpace from '../WorkSpace'
const { Header } = Layout;

require('./index.scss')
class Blackboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout className='dashboard'>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Página Nueva</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <WorkSpace />
            </Layout>
        );
    }
};

export default Blackboard