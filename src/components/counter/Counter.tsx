import * as React from 'react';

export default class Counter extends React.Component {

    state = { count: 0, name: 'toto' };


    increment = () => {
        // this.state.count += 1;
        this.setState({
            count: (this.state.count + 1)
        });
        console.log(this.state);
    }

    decrement = () => {
        this.setState({
            count: (this.state.count - 1)
        });
    }



    render() {
        return (
            <div>
                {this.state.count != 0 ? (<h1>{this.state.count}</h1>) : (null)}
                <h2>{this.state.name}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}