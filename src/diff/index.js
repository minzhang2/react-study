import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

/**
 * diff
 * 1.tree diff：采用启发式算范，只对树的同一层级进行比对，避免o(n^3)的性能消耗
 * 2.component diff：不同组件则执行旧组件的卸载和新组件的挂载
 * 3.element diff：通过遍历nextChildren对比新旧节点，
 *                 当prevChild._mountIndex < lastIndex则进行节点的移动,
 *                 当prevChild._mountIndex = lastIndex则跳过当前节点,lastIndex++
 *                 当prevChild._mountIndex > lastIndex则跳过当前节点；lastIndex = Math.max(prevChild._mountIndex, lastIndex)
 *
 * 参考：https://zhuanlan.zhihu.com/p/20346379
 */

class User extends Component {
  static defaultProps = {

  }
  static propTypes = {

  }
  render() {
    return <div onClick={this.props.onClick}>{this.props.name}</div>
  }
}

class App extends Component {
  static defaultProps = {

  }
  static propTypes = {

  }
  constructor(props) {
    super(props);
    this.state = {
      name: 'jay',
      visible: false,
      list: [1, 2, 3, 4]
    }
  }

  componentWillMount() {
    // setTimeout(() => {
      // this.setState({
      //   name: 'jay1',
      // })
    // }, 1000)
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     name: 'jay1',
    //   })
    // }, 1000)
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      this.setState({
        name: 'jay2',
      })
    }, 1000)
  }

  componentDidUpdate() {
    // debugger
    // this.setState({
    //     name: 'jay234',
    //   })
  }

  handle = () => {
    this.setState((prevState, prevProps) => ({
      name: prevState.name + '2',
      visible: true,
      list: [1, 5, 4, 3]
    }), () => {
      console.log(1)
    })
  }

  render() {
    const { name, visible, list } = this.state;
    // return (
    //   <div onClick={this.handle}>
    //     {
    //       visible
    //       ? list.map(item => <span key={item}>{item}</span>)
    //       : list.map(item => <span key={item}>{item}</span>)
    //     }
    //   </div>
    // )
    return (
      <div onClick={this.handle} >
        { visible ? <User ref='ele' name={name} /> : <div>{name}</div>}
        {'ssssssssssss'}{name}
      </div>
    )
  }
}

const component = ReactDOM.render(<App />, document.querySelector("#root"))
ReactDOM.findDOMNode(component)
