import React,{Component} from 'react';
import Button from './button';




class Baidu extends Component{

    fn = (e) =>{
        this.props.checkBoxcontrol(e.target.checked)
        //this.props.checkBoxcontrol(this.state.check)
    }

    render(){
        let checkboxAll =  this.props.arr.every( (item) => item.checked  )
        console.log(checkboxAll)
        let html =  this.props.arr.map( (item) =>{
            return <Button key={item.id} {...item} checked = {item.checked} fn = {this.props.singlecontrol}/>
        } ) 
        return <div>
            <input type="checkbox" onChange = {this.fn} checked = {checkboxAll}/>
                <span>全选</span>
                <ul>
                    {
                        html
                    }
                </ul> 
        </div>
    }
}

export default Baidu;