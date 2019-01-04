import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Link, hashHistory } from 'react-router';

class Index extends Component {
  render() {
    return <div>
      <Link to="/">Index</Link>/
      <Link to="/list">List</Link>/
      <Link to="/detail">Detail</Link>
      <div>Index</div>
    </div>
  }
}

class List extends Component {
  render() {
    return <div>
    <Link to="/">Index</Link>/
    <Link to="/list">List</Link>/
    <Link to="/detail">Detail</Link>
    <div>List</div>
  </div>
  }
}

class Detail extends Component {
  render() {
    return <div>
    <Link to="/">Index</Link>/
    <Link to="/list">List</Link>/
    <Link to="/detail">Detail</Link>
    <div>Detail</div>
  </div>
  }
}

const App = (
    <div>

      <Router history={hashHistory}>
        <Route path="/" component={Index}></Route>
        <Route path="/list" component={List}></Route>
        <Route path="/detail" component={Detail}></Route>
      </Router>
    </div>
)

const component = ReactDOM.render(App, document.querySelector("#root"))
ReactDOM.findDOMNode(component)

