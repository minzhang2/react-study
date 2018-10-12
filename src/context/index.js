/**
 * react高级api
 * react-redux与react-router均采用context
 * 根组件暴露childContext，子孙节点均可取到context
 * https://juejin.im/post/5a90e0545188257a63112977
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class TodoApp extends Component {

    // 声明需要使用的Context属性
    static contextTypes = {
        a: PropTypes.number
    }

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        debugger
        return ( 
            <div></div>
        )
    }
}

class Item extends React.Component {

    // 声明需要使用的Context属性
    static contextTypes = {
        a: PropTypes.number
    }

    constructor(props) {
        debugger
        super(props);
    }

    render() {
        debugger
        return <div> sfgaagshah </div>;
    }
}

class Wrap extends React.Component {

    static childContextTypes = {
        a: PropTypes.number
    }

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            a: 222
        }
    }

    render() {
        return React.Children.only(this.props.children);
    }
}

ReactDOM.render(<Wrap><TodoApp /></Wrap>, document.querySelector("#root"))