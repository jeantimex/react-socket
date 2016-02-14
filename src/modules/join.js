import React, { Component, PropTypes } from  'react';

class Join extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log('click!');
        const { emit } = this.props;

        if (emit) {
            emit('join', { name: 'Su' });
        }
    }

    render() {
        return (
            <button
                onClick={ this.onClick }
            >
                Join
            </button>
        );
    }

}

Join.propTypes = {
    emit: PropTypes.func
};

export default Join;