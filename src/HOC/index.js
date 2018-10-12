/**
 * 高阶函数
 * 将组建作为函数的参数返回基于该组件渲染的一个全新组件
 * 参考：
 * https://zhuanlan.zhihu.com/p/24776678
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        const { value, onChange } = this.props;
        return <input value={ value } onChange={ onChange } />
    }
}

function HOC(Component) {
    class WrapComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 1
            }
        }

        handleChange(e) {
            this.setState({
                value: e.target.value
            })
        }

        getInstance(inst) {
            console.log(inst)
        }

        render() {
            const { value } = this.state;
            const props = { 
                value, 
                onChange: this.handleChange.bind(this),
                ref: this.getInstance.bind(this)
             };
            return (
                <div>
                    <Component {...props} />
                </div>
            );
        }
    }
    return <WrapComponent />;
}

ReactDOM.render(HOC(App), document.querySelector('#root'))