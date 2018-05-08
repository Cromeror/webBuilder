import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Layout
} from 'antd'

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
                        renderedTree.push(<Layout key={Math.random()}> test {nodeValue.children & this.analyzeTree(nodeValue.children)} </Layout>)
                        break;
                    default:
                        console.log('Llego a una hoja')
                        break;
                }
            }
        }
        return renderedTree
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