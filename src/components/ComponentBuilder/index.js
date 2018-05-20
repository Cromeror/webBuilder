import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input.comp'
import Text from './Text.comp'

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
                    break;
                case 'h1':
                    this.child = <Text {...{ config }} type='h1' text={this.props.text} />
                case 'p':
                    this.child = <Text {...{ config }} type='p' text={this.props.text} />
            }
        }
    }

    render() {
        return (this.child);
    }
};

Builder.propTypes = {
    config: PropTypes.object,
    text: PropTypes.text
}

export default Builder