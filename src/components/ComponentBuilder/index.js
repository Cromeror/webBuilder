import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input.comp'

class Builder extends Component {
    constructor(props) {
        super(props);
        this.child = <div>Nada que renderizar</div>
    }

    componentWillMount() {
        const { type, config } = this.props

        if (type) {
            switch (type) {
                case 'input':
                    this.child = <Input {...{ config }} />
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