import React,{Component} from 'react';

class Button extends Component{
    constructor(props){
        super(props)
        this.state = {
            color:this.props.color
        }
        this.fn3 = this.fn3.bind(this);
    }
    fn = () =>{
        console.log(1)
        this.setState({
            color:'red'
        })
    }
    fn2(){
        this.setState({
            color:'red'
        })
    }
    fn3(){
        this.setState({
            color:'red'
        })
    }
    render(){
        let obj = {
            color:this.state.color
        };
        return (
            <div>
                <p style={obj}>可变色的p</p>
                <button onClick={this.fn2.bind(this)}>变成红色</button>
                <button onClick={this.fn3}>变成红色</button>
                <button onClick={this.fn}>变成红色</button>
            </div>
        )
    }
}

Button.defaultProp = {
    value: '请定制'
}

export default Button;