/**
 * redux与react-redux
 * 1.redux
 * 本质是观察订阅，只能通过dispatch修改store
 * 通过中间件进行对dispatch的增强实现异步操作
 * store改变通过subscribe进行通知
 * 2.react-redux
 * 提供Provider组件与connect方法
 * Previder作为根组件暴露store给子孙节点
 * connect通过高阶组件的方式，将mapStateToProps，
 * mapDispatchToProps，ownProps通过mergeProps组合，
 * 给Connect提供props，并在ComponentDidMount生命周期
 * 将onStateChange订阅store，最后通过selector进行性能
 * 优化
 * 参考：
 * http://imweb.io/topic/5a1969b2a192c3b460fce226
 * https://zhuanlan.zhihu.com/p/39289157
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { select, put, call } from 'redux-saga/effects';

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	a: 123
    }
  }

  render() {
  	const { a } = this.state;
    const { add, n, value } = this.props;
    return (
    	<div>
    	    <button onClick={ () => add(222) }>add</button>
            <div>{ a }</div>
            <div>{ n }</div>
            <div>{ value }</div>
    	</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
        n: state.n
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const addAction = () => ({
        type: 'add',
        payload: 2
    })

	return bindActionCreators({
        add: addAction
    }, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

const reducer = (state = {}, action) => {
	return action.payload ? { ...state, n: action.payload } : {...state};
}

const initialStore = { n: 1 };

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, initialStore, applyMiddleware(sagaMiddleware));

function query() {
    return new Promise(resolve => {
        setTimeout(() => resolve(2), 1000)
    });
}

function* rootSaga() {
    const data = yield call(query);
    console.log(data)
}

sagaMiddleware.run(rootSaga);

ReactDOM.render((
	<Provider store={ store }>
    <App value={2}/>
  </Provider>
), document.querySelector('#root'))
