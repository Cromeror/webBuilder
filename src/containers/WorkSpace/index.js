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
            /**
             * Configuracion de la pagina que se esta construyendo
             */
            pageConfig: {
                'main': {
                    type: "layout",
                    config: {
                        style: {
                            height: '100%',
                            background: '#f0f2f5'
                        },
                        key: 'main'
                    }
                }
            }
        }
    }

    onDrop = (e, cat) => {
        let element = e.dataTransfer.getData("id"),
            child = new Object()
        switch (element) {
            case 'div':
                child['child' + Math.random()] = {
                    type: 'div',
                    config: {
                        style: {
                            height: 100,
                            background: 'yellow'
                        },
                        key: Math.random()
                    }
                }
                break;

            default:
                break;
        }
        this.setState(prevState => {
            let pageConfig = { ...prevState.pageConfig }
            pageConfig.main.children = Object.assign(pageConfig.main.children ? pageConfig.main.children : {}, child)
            return { pageConfig }
        })
        /*    tasks = this.state.tasks.filter(task => {
                if (task.name == id) {
                    task.category = cat;
                }
                return task;
            });
        this.setState({ tasks }); */
    };

    onDragOver = e => {
        e.preventDefault();
    };

    render() {
        return (
            <Layout className='workspace'>
                <WorkTools />
                <Layout style={{ padding: '0 24px 24px' }}
                    onDragOver={this.onDragOver}
                    onDrop={e => this.onDrop(e, "complete")}>
                    <Layout.Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, height: '100%' }}>
                        <GridBuilder
                            components={this.state.pageConfig} />
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
};

export default WorkSpace