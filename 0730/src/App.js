import React, { Component } from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import './style/index.css'
import Cookie from 'js-cookie'
import Login from './components/login'


class App extends Component {
  
  render() {
    let ck = Cookie.get('rwg')
    return (
      <React.Fragment>
        <NavLink to='/'>首页</NavLink>
        <NavLink to='/about'>关于</NavLink>
        <NavLink to='/user'>用户</NavLink>
        <hr/>
        <Switch>
          <Route exact path='/' render={()=>{
            return <p>这是首页</p>
          }}/>
          <Route path='/login' render={(props)=>{
            return ck ? <Redirect to='/'/> :<Login {...props}/>
          }}/>
          <Route path='/about' render={()=>{
            return <p>关于我们</p>
          }}/>
          <Route path='/user' render={()=>{
            return ck?<p>用户信息</p>:<Redirect to='/login'/>
          }}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
