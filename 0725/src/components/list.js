import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import className from 'classnames';

class List extends Component {
    constructor (p){
        super(p);
        this.state = {
            editId:''
        }
    }
    componentDidUpdate(){
        //进行其他操作的时候做一个undifined保护
        console.log( this[this.state.editId])
        this[this.state.editId]&&this[this.state.editId].focus();
    }
    render() {
        let {list} = this.props;
        let html = list.map((item) => {
            return<li className={className({
                completed:item.checked,
                editing:item.id ===this.state.editId
            })} 
            key = {item.id}>
                    <div className="view">
                        <input className="toggle" type="checkbox" 
                        checked = {item.checked}
                        onChange = {() => this.props.changeCheck(item.id)}/>
                        <label onDoubleClick={ () =>{this.setState({
                            editId:item.id
                        })} }>{item.value}</label>
                        <button className="destroy"></button>
                    </div>
                    <input className="edit" ref={(ele) => this[item.id] = ele}/>
                </li>
        })
        return (
            <Fragment>
                <input className="toggle-all" type="checkbox" />
                <ul className="todo-list">
                    {html}
                </ul>
            </Fragment>
        )
    }
}

function getReduxState(state){
    return {
        list:state.list
    }
}

function setReduxState(dispacth){
    return{
        changeCheck(id){
            dispacth({type:'changeCheck',id:id})
        }
    }
}

export default connect(getReduxState,setReduxState)(List);