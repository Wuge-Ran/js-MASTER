import React,{Component} from 'react';

class Button extends Component{

    fn = () => {
        this.props.fn(this.props.id)
    }

   render(){
       return<li>
           <input type="checkbox" checked = {this.props.checked} onChange = {this.fn}/>
            <span>{this.props.songName}</span>
            <span>{this.props.singerName}</span>
       </li>
   }
}


export default Button;