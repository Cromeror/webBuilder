import React, { Component } from 'react';
import {
    Layout,
    Breadcrumb
} from 'antd';
import WorkTools from './WorkTools.comp'
import ComponentBuilder from '../../components/ComponentBuilder'
import GridBuilder from '../../components/GridBuilder'
require('./index.scss')
class WorkSpace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: new Array()
        }
    }

    render() {
        return (
            <Layout className='workspace'>
                <WorkTools />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Layout.Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {this.state.elements}
                        <GridBuilder
                            components={
                                {
                                    'idName': {
                                        type: "layout"
                                    }
                                }
                            } />
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
};

export default WorkSpace