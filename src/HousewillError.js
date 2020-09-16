import React, { Component } from 'react';

class HousewillError extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h2>Sorry. There was an error.</h2>;
        }
        return this.props.children;
    }
}

export default HousewillError;
