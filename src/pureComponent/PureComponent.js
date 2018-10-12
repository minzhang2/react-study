/**
 * PureComponent
 * 在shouldComponentUpdate利用
 * shallowEqual对prop和state的浅比较
 * 进行性能优化
 * 参考：
 * https://www.jianshu.com/p/33cda0dc316a
 */

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3]
        }
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