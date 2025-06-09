import React, { Component } from 'react';

class LifecycleLogger extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log(`componentDidUpdate: Count changed to ${this.state.count}`);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Component is being removed from the DOM');
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default LifecycleLogger;
