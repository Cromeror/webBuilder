import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Layout,
    Col,
    Row
} from 'antd'
import ComponentBuilder from '../ComponentBuilder'

/**
 * components: es un JSON contiene los elementos que se van a renderizar y puede contener elementos layout anidados en forma de arbol.
 */
class GridBuilder extends Component {
    constructor(props) {
        super(props);
        this.components = new Array()
    }

    componentWillMount() {
        const { components } = this.props

        if (components && typeof components == 'object') {
            this.components = this.analyzeTree(components)
        }
    }

    componentWillReceiveProps(nextProps) {
        const { components } = nextProps
        if (components != this.props.components) {
            if (components && typeof components == 'object') {
                this.components = this.analyzeTree(components)
            }
        }
    }

    render() {
        return (
            <Layout style={{ height: '100%' }}>
                {this.components}
            </Layout>)
    }

    /**
     * Quiero analizar los dos primeros niveles, el primer es la keyname y el segundo la configuracion.
     * 
     * Luego si este tiene mas elementos pienso hacer una recursividad
     * @param {*} tree 
     */
    analyzeTree(tree) {
        let renderedTree = new Array()
        for (const nodeKey in tree) {
            if (tree.hasOwnProperty(nodeKey)) {
                const nodeValue = tree[nodeKey];
                switch (nodeValue.type) {
                    case 'layout':
                        renderedTree.push(
                            <Layout {...nodeValue.config}>
                                {nodeValue.children
                                    ? this.analyzeTree(nodeValue.children)
                                    : <div></div>}
                            </Layout>)
                        break;
                    case 'div':
                        renderedTree.push(
                            <div {...nodeValue.config}>
                                {nodeValue.children
                                    ? this.analyzeTree(nodeValue.children)
                                    : <div></div>}
                            </div>)
                        break
                    case 'row':
                        renderedTree.push(
                            <Row {...nodeValue.config}>
                                {nodeValue.children
                                    ? this.analyzeTree(nodeValue.children)
                                    : <div></div>}
                            </Row>)
                        break
                    case 'col':
                        renderedTree.push(
                            <Col {...nodeValue.config}>
                                {nodeValue.children
                                    ? this.analyzeTree(nodeValue.children)
                                    : <div></div>}
                            </Col>)
                        break
                    default:
                        renderedTree.push(<ComponentBuilder {...nodeValue} />)
                        break;
                }
            }
        }
        return renderedTree
    }
};

GridBuilder.propTypes = {
    components: PropTypes.object
}

export default GridBuilder