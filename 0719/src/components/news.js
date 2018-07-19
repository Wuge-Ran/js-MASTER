import React from 'react';
import Button from './button';

class News extends React.Component {
    render(){
        console.log(this.props.arr)
        return (
            <div>
               {
                   this.props.arr.map( (item,index) =>  <Button key = {index} value = {item.title}/>)}
               {
                   this.props.arr.map( (item,index) => {return (<div key = {index}>
                       {item.list.map( (item,index)=>  <p key = {index}>{item}</p>)}
                   </div>)
                    } )
               }
            </div>
        );
    }
}


export default News;