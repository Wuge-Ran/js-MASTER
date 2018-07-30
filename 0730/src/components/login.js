import React, { Component } from 'react'
import Cookie from 'js-cookie'

export default class Login extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>登录</h3>
                <input/>
                <input/>
                <button onClick={ ()=>{
                    Cookie.set('rwg',1432,7)
                    this.props.history.replace('/')
                } }>按钮</button>
            </div>
        )
    }
}
