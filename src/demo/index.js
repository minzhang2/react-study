import React, { Component, PureComponent } from 'react'; 
import ReactDOM from 'react-dom';

// let uuid = 0;

// class App extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//           name: 'jay'
//         ]
//       }
//     }

//     handle = () => {
//       this.setState({
//         name: `jay${uuid++}`
//       })
//     }
    
//     render() {
//       return <div onClick={this.handle}>{name}</div>
//     }
//   }

class User extends Component {
  static defaultProps = {
    
  }
  static propTypes = {

  }
  render() {
    return <div onClick={this.props.onClick}>{this.props.name}</div>
  }
}

class App extends PureComponent {
  static defaultProps = {

  }
  static propTypes = {

  }
  constructor(props) {
    super(props);
    this.state = {
      name: 'jay'
    }
  }

  componentDidMount() {
    debugger
  }

  handle = () => {
    this.setState({
      name: 'zm'
    })
    this.setState({
      name: 'zm1'
    })
    this.setState((prevState, prevProps) => ({
      name: prevState.name + '2'
    }), () => {
      console.log(1)
    })
  }

  render() {
    return (
      <div>
        <User ref='ele' onClick={this.handle} name={this.state.name} />
        <User ref='ele1' onClick={this.handle} name={this.state.name} />
        {null}333333{'ssssssssssss'}{this.state.name}
      </div>
    )
  }
}
  
const component = ReactDOM.render(<App />, document.querySelector("#root"))
ReactDOM.findDOMNode(component)

// let left;
// function time() {
//   const end = new Date('2018/11-07 08:00:00');
//   const now = Date.now();
//   console.log(now)
//   left = end - now;
//   const d = Math.floor(left / (1000 * 60 * 60 * 24));
//   const h = Math.floor((left / (1000 * 60 * 60) % 24));
//   const m = Math.floor((left / (1000 * 60)) % 60);
//   const s = Math.floor((left / 1000) % 60) ;
//   console.log(`${d}-${h}-${m}-${s}`)
  
// }
// const interval = setInterval(() => {
//   if(left === 0) {
//     clearInterval(interval);
//   }
//   time();
// }, 1000);

