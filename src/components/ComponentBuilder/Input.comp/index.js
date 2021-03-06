import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

class InputComp extends Component {
    constructor(props) {
        super(props);

        this.config = null
    }

    componentWillMount() {
        const { config } = this.props
        this.config = config
    }

    render() {
        return (
            <Input {...this.config} />
        );
    }
};

InputComp.propTypes = {
    config: PropTypes.object
}

export default InputComp