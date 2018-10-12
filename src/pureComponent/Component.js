/**
 * 模拟PureComponent
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import shallowEqual from './shallowEqual'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3]
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state);
    }

    handleClick() {
        const { list } = this.state;
        list.pop();
        this.setState({
            list: list.slice()
        });
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                {
                    list.map((value, index) => <span key={ index }>{ value }</span>)
                }
                <button onClick={ this.handleClick.bind(this) }>click</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))