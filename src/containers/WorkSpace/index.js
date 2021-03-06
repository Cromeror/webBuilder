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
                                        type: "layout",
                                        config: {
                                            className: 'pad',
                                            key: 'ProbandoKey'
                                        },
                                        children: {
                                            'inputName': {
                                                config: {}
                                            },
                                            "row": {
                                                type: 'row',
                                                children: {
                                                    'col': {
                                                        type: "col",
                                                        span: 4,
                                                        children: {
                                                            'inputName1': {
                                                                type: 'input',
                                                                config: {
                                                                    placeholder: 'Hola soy un placeholder',
                                                                    key: 'ProbandoKey'
                                                                }
                                                            }
                                                        }
                                                    },
                                                    'col2': {
                                                        type: "col",
                                                        span: 4,
                                                    },
                                                    'col3': {
                                                        type: "col",
                                                        span: 4,
                                                    },
                                                    'col4': {
                                                        type: "col",
                                                        span: 4,
                                                    }
                                                }
                                            },
                                            'idName': {
                                                type: 'layout',
                                                children: {
                                                    'inputName': {
                                                        type: 'layout',
                                                        config: {}
                                                    },
                                                    'inputName1': {
                                                        type: 'h1',
                                                        text: 'Hola soy un texto de prueba'
                                                    }
                                                }
                                            }
                                        }
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