import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './navbar';
import AccountInfo from './account';

import ReactDOM from 'react-dom';
import { Route, browserHistory, Router, IndexRoute } from 'react-router';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/account' component={AccountInfo} />
        <Route component={Login} />
      </Router>
    )
  }
}
const Home = () => <h1>LANDING PAGE</h1>;
export default App;

//
//ReactDOM.render((
//   <Router history = {browserHistory}>
//
//   <Route path="/" component={App}>
//
//         {/* add it here, as a child of `/` */}
//
//         <Route path="/account" component={AccountPage}/>
//       </Route>
//   </Router>
//
//), document.getElementById('root'));
