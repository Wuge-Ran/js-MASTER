import React,{Component} from 'react';
import Baidu from './components/baidu';

let data = [
    {
      id: 123,
      songName: '泡沫',
      singerName: '邓紫棋',
      zhuangji: 10,
      checked: true
    },
    {
      id: 5677,
      songName: '东风破',
      singerName: '周杰伦',
      zhuangji: 1,
      checked: true
    }
  ]



class App extends Component {
  constructor (p){
    super(p)
    this.state = {
      data:data
    }
  }
  //全选的回调函数  
  checkBoxcontrol = (bl) =>{
    data.forEach(function (item){
      item.checked = bl;
    })
    this.setState({
      data:data
    })
  }
  singlecontrol = (id) =>{
    data.forEach(function (item){
      if(item.id == id){
        item.checked = !item.checked;
      }
    })
    this.setState({
      data:data
    })
    
  }
    render(){
        return <Baidu arr = {data} checkBoxcontrol = {this.checkBoxcontrol} singlecontrol = {this.singlecontrol}/>   
    }
}

export default App;