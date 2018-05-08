import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout.comp'

class Builder extends Component {
    constructor(props) {
        super(props);
        this.child = <div>Nada que renderizar</div>
    }

    componentWillMount() {
        const { config } = this.props

        if (config) {
            switch (config.type) {
                case 'layout':
                    this.child = <Layout />
            }
        }
    }

    render() {
        return (this.child);
    }
};

Builder.propTypes = {
    config: PropTypes.object
}

export default Builder