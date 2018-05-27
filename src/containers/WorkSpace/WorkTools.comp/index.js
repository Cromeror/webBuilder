import React, { Component } from 'react';
import {
    Layout,
    Menu,
    Breadcrumb,
    Icon
} from 'antd';

require('./index.scss')
class WorkSpace extends Component {
    constructor(props) {
        super(props);
    }

    onDragStart = (e, id) => {
        e.dataTransfer.setData("id", id);
    };

    render() {
        return (
            <div>
                <Layout.Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item
                            key="1"
                        >
                            <div
                                draggable
                                onDragStart={e => this.onDragStart(e, 'div')}>
                                DIV
                            </div>
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>
            </div>
        );
    }
};

export default WorkSpace