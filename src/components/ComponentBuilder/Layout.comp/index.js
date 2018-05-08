import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Layout
} from 'antd';

class LayoutComp extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { config } = this.props

        if (config) {
        }
    }

    render() {
        return (
            <Layout>
                Primer text
            </Layout>
        );
    }
};

LayoutComp.propTypes = {
    config: PropTypes.object
}

export default LayoutComp