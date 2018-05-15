import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextComp extends Component {
    constructor(props) {
        super(props);

        this.child = ''
    }

    componentWillMount() {
        const { config, type, text } = this.props

        switch (type) {
            case 'h1':
                this.child = <h1 {...config}>{text}</h1>
                break;
            default:
                this.child = <p {...config}>{text}</p>
                break;
        }
    }

    render() {
        return this.child;
    }
};

TextComp.propTypes = {
    config: PropTypes.object
}

export default TextComp