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
                        if (nodeValue.children)
                            renderedTree.push(
                                <Layout
                                    {...nodeValue.config}
                                    key={Math.random()}>
                                    {this.analyzeTree(nodeValue.children)}
                                </Layout>)
                        break;
                    case 'col':
                        renderedTree.push(
                            <Col
                                {...nodeValue.config}
                                key={Math.random()}>
                                {nodeValue.children
                                    ? this.analyzeTree(nodeValue.children)
                                    : <div></div>}
                            </Col>)
                        break
                    case 'row':
                        renderedTree.push(
                            <Row
                                key={Math.random()}>
                                {nodeValue.children
                                    ? this.analyzeTree(nodeValue.children)
                                    : <div></div>}
                            </Row>)
                        break
                    default:
                        renderedTree.push(<ComponentBuilder
                            key={Math.random()}
                            {...nodeValue} />)
                        break;
                }
            }
        }
        return renderedTree
    }

    /**
     * Construye un objeto que luego podrá ser pasado como configuración a un componente de ant-D
     * 
     * @param {*} configParam 
     */
    configBuilder(configParam) {
        let configBuilded = new Object();
        for (const key in configParam) {
            if (configParam.hasOwnProperty(key)) {
                switch (key) {
                    case 'span':
                        configBuilded[key] = configParam[key]
                        break;
                }
            }
        }
        return configBuilded
    }

    render() {
        return (
            <Layout>
                {this.components}
            </Layout>)
    }
};

GridBuilder.propTypes = {
    components: PropTypes.object
}

export default GridBuilder