import React,{Component} from 'react';

class Tudo extends Component{

    constructor(p){
        super(p);

        this.state = {
            val: this.props.val
        }
    }
    
    textChange = (e) => {
        this.setState({
            val:e.target.value
        })
    }
    blurChangeVal = (e) =>{
        let {val,id,blurFn} = this.props;
        if(e.keyCode === 27){
            this.setState({
                val: this.props.val
            })
            blurFn(e,id,this.state.val,val)
          }else if(e.keyCode === 13 || e.keyCode === undefined){
            blurFn(e,id,this.state.val,val)
          }
        
    }
    //自动聚焦
    componentDidUpdate(){
        this.input.focus()
    }
    render(){
        let {val,id,delTudo,checked,liCheck,editFn,edit,blurFn} = this.props;
        let completed = checked?"completed":''; 
        let editing = edit?"editing":'';
        return(
            <li
            className = {completed + ' ' +editing}
            // className="editing"
            >
            <div className="view">
                {/* 勾选按钮 */}
                <input
                type="checkbox"
                className="toggle"
                checked = {checked}
                onChange = {() => liCheck(id)}
                />
                {/* todo 的内容 */}
                <label onDoubleClick = {() => editFn(id)}>
                    {val}
                </label>
                {/* 删除按钮 */}
                <button
                className="destroy"
                onClick = {() => delTudo(id)}
                ></button>
            </div>
            {/* 编辑 todo 的输入框 */}
            <input
                type="text"
                className="edit"
                value = {this.state.val}
                ref = {(el) => this.input = el}
                onBlur = {(e) => blurFn(e,id,this.state.val,val)}
                onKeyDown = { this.blurChangeVal }
                onChange = {this.textChange}
            />
            </li>
        )
    }
}

export default Tudo;