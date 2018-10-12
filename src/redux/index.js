import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

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

const store = createStore(reducer, { n: 1 });

ReactDOM.render((
	<Provider store={ store }>
    <App value={2}/>
  </Provider>
), document.querySelector('#root'))
