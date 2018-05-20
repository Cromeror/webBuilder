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
                                            "row": {
                                                type: 'row',
                                                children: {
                                                    'col': {
                                                        type: "col",
                                                        config: {
                                                            className: 'pad',
                                                            key: 'ProbandoKey',
                                                            span: { xs: 24, md: 12 },
                                                            align: "middle"
                                                        },
                                                        children: {
                                                            'inputName1': {
                                                                type: 'p',
                                                                text: 'Texto responsive'
                                                            }
                                                        }
                                                    },
                                                    'col2': {
                                                        type: "col",
                                                        config: {
                                                            className: 'pad',
                                                            key: 'ProbandoKey',
                                                            span: { xs: 24, md: 12 }
                                                        },
                                                        children: {
                                                            'inputName1': {
                                                                type: 'h1',
                                                                text: 'Texto 2'
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            'idName': {
                                                type: 'layout',
                                                children: {
                                                    "row": {
                                                        type: 'row',
                                                        children: {
                                                            'col': {
                                                                type: "col",
                                                                span: 12,
                                                                children: {
                                                                    'inputName1': {
                                                                        type: 'h1',
                                                                        text: 'Caring for every body'
                                                                    },
                                                                    'inputName2': {
                                                                        type: 'p',
                                                                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit vitae auctor bibendum ligula phasellus, sem libero tempus dui vivamus accumsan quis augue per natoque montes. '
                                                                    }
                                                                }
                                                            },
                                                            'col2': {
                                                                type: "col",
                                                                span: 12,
                                                                config: {
                                                                    className: 'pad',
                                                                    key: 'ProbandoKey',
                                                                    className: { padding: 50 }
                                                                },
                                                                children: {
                                                                    'idName': {
                                                                        type: 'layout',
                                                                        children: {
                                                                            'title': {
                                                                                type: 'p',
                                                                                text: 'Start here'
                                                                            },
                                                                            'subtitle': {
                                                                                type: 'p',
                                                                                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit vitae auctor bibendum ligula phasellus, sem libero tempus dui vivamus accumsan quis augue per natoque montes. '
                                                                            },
                                                                            'inputName1': {
                                                                                type: 'input'
                                                                            },
                                                                            'inputName2': {
                                                                                type: 'input'
                                                                            },
                                                                            'inputName3': {
                                                                                type: 'input'
                                                                            },
                                                                            'inputName4': {
                                                                                type: 'input'
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "as": {
                                                type: "layout",
                                                config: {
                                                    className: 'pad',
                                                    key: 'ProbandoKey'
                                                },
                                                children: {
                                                    "row": {
                                                        type: 'row',
                                                        children: {
                                                            'col': {
                                                                type: "col",
                                                                config: {
                                                                    className: 'pad',
                                                                    key: 'ProbandoKey',
                                                                    span: 7
                                                                },
                                                                children: {
                                                                    'inputName1': {
                                                                        type: 'p',
                                                                        text: 'Hola soy un texto de prueba'
                                                                    }
                                                                }
                                                            },
                                                            'col2': {
                                                                type: "col",
                                                                config: {
                                                                    className: 'pad',
                                                                    key: 'ProbandoKey',
                                                                    span: 7
                                                                },
                                                                children: {
                                                                    'inputName1': {
                                                                        type: 'h1',
                                                                        text: 'Texto 2'
                                                                    }
                                                                }
                                                            },
                                                            'col3': {
                                                                type: "col",
                                                                config: {
                                                                    className: 'pad',
                                                                    key: 'ProbandoKey',
                                                                    span: 7
                                                                },
                                                                children: {
                                                                    'inputName1': {
                                                                        type: 'h1',
                                                                        text: 'Texto 2'
                                                                    }
                                                                }
                                                            }
                                                        }
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