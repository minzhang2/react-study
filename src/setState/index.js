/**
 * setState
 * 1.如果当前setState在更新阶段则将其添加到dirtyComponent，展现出来的是state的合并，这时state表现为异步
 * 2.如果当前setState不在更新阶段则重新发起事务，进行更新操作，这是state不进行合并，这时state表现为同步
 * 参考:https://zhuanlan.zhihu.com/p/20328570
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }

  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};

const component = ReactDOM.render(<App />, document.querySelector("#root"))
ReactDOM.findDOMNode(component)
