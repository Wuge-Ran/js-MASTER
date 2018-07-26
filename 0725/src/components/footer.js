import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
	            <span className="todo-count">
	            	<strong>0</strong>
	            	<span>条未选中</span>
	            </span>
	            <ul className="filters">
	            	<li><a href="#/all" className="selected">All</a></li> 
	            	<li><a href="#/active" className="">Active</a></li> 
	            	<li><a href="#/completed" className="">Completed</a></li>
	           	</ul>
            </footer>
        )
    }
}
