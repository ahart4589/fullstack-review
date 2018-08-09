import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {HashRouter, Route, Switch} from 'react-router-dom'

import {getUser} from './redux/reducers/user'

import Header from './components/Header'
import LandingPage from './components/LandingPage'
import PostsContainer from './components/PostsContainer'


class App extends Component {
  componentDidMount(){
    this.props.getUser()
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/posts' component={PostsContainer}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default connect(null, {getUser})(App);
