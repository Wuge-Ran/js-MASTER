import React, {Fragment, Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import Tudo from './components/tudoLi';
import Footer from './components/footer'

import './main.css';

let arr = JSON.parse(localStorage.getItem('lisData'))||[];

class TodoList extends Component{
  constructor(props){
      super(props);

      this.state = {
        list:arr,
        val:'',
        thisPageHash:'all'
      }
  }
  //输入时改变
  inputFn = (ev) => {
    this.setState({
      val : ev.target.value
    })
  }
  //按下enter键时，加入list
  keyFn = (ev) => {
    if(ev.keyCode === 13 && this.state.val.trim() !==''){
      let {list} = this.state;
      this.setState({
        list:[
          {
            id:Math.random(),
            val:this.state.val,
            checked:false,
            edit:false
          },
          ...list
        ],
      }, () => {
        this.setState({
          val:''
        })
      })
    }
  }
  //Tudo按下删除键，从data中删除这一条
  delTudo = (id) => {
    let {list} = this.state;
    list = list.filter( (item) => {
      return item.id !== id
    } )
    this.setState({
      list:list
    })
  }
  //点击全选的checkBox触发
  checkAll = (ev) => {
    let {list} = this.state;
    list.forEach( (item) => {
      return item.checked = ev.target.checked;
    } )
    this.setState({
      list:list
    })
  }
  //点击li中的input触发
  liCheck = (id) => {
    let {list} = this.state;
    list.forEach( (item) => {
      if(item.id === id){
        item.checked = !item.checked;
      }
    })
   
    this.setState({
      list:list
    })
  }

  //需要编辑的li的id
  editFn = (id) => {
    let {list} = this.state;
    list.forEach( (item) => {
      if(item.id === id){
        item.edit = true;
      }else{
        item.edit = false;
      }
    })
    this.setState({
        list
    })
  }

  //失去焦点时改变value值
  blurFn = (e,id,val,oldVal) => {
    let {list} = this.state;
    
    if(e.keyCode === 27){
      this.editFn('');
      list.forEach( (item) => {
      if(item.id === id){
          item.val = oldVal;
        }
      })
    }else if(e.keyCode === 13 || e.keyCode === undefined){
      this.editFn('');
      if(val.trim() === ''){
        list = list.filter( (item) => {
          return item.id !== id
        } )
        this.setState({
            list
        })
        return;
      }
      list.forEach( (item) => {
        if(item.id === id){
          item.val = val;
        }
      })
      
    }
    
    this.setState({
        list
    })
  }

  //拿到哈希值
  getHash = ()=>{
    let hash = window.location.hash;
    if(hash){
      hash = hash.slice(2);
    }else{
      hash = 'all';
    }
    
    this.setState({
      thisPageHash:hash
    })
  }

  //存一下localstorage
  componentDidUpdate(){
    localStorage.setItem('lisData',JSON.stringify(this.state.list));
  }



  //在装载的时候,挂上hash的方法
  componentDidMount(){
      this.getHash();
      window.addEventListener('hashchange',this.getHash)
  }

  render(){

    let {list,val,thisPageHash} = this.state;
    let activeList = list.filter( (item) =>{
        return !item.checked;
    } )
    let foot = list.length ? <Footer length = {activeList.length} hash = {this.state.thisPageHash}/> : '';

    if(thisPageHash === 'active'){
      
      list = activeList;
    }else if(thisPageHash === 'completed'){
      list = list.filter( (item) =>{
        return item.checked;
    } )
    }
    let html = list.map( (item) => {
      return <Tudo 
      key = {item.id} 
      {...item}
      liCheck = {this.liCheck}
      delTudo = {this.delTudo}
      editFn = {this.editFn}
      blurFn = {this.blurFn}
      inputKeyDown = {this.inputKeyDown}
       />
    } )
    let bl = list.length&&list.every( (item) => {
        return item.checked
    })
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          {/* 输入框 */}
          <input
            type="text"
            className="new-todo"
            placeholder="type something here"
            value= {val}
            onChange={this.inputFn}
            onKeyDown={this.keyFn}
          />
        </header>

        <section className="main">
          {/* 全选按钮 */}
          <input
            type="checkbox"
            className="toggle-all"
            checked = {bl}
            onChange = {this.checkAll}
          />
          <ul className="todo-list">
            {
              html
            }
          </ul>
        </section>

        {foot}

      </div>
    )
  }
}


ReactDOM.render(
  <TodoList />
  ,
  document.getElementById('root')
)
