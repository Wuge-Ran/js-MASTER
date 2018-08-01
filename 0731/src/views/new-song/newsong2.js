import React, { Component } from 'react'
import { getDataComponent} from '../../components/getDataComponent'
import CustomeCarousel from './carousel'
import { List } from 'antd-mobile';
const Item = List.Item;

 class NewSong extends Component {
  render() {
    let { banner } = this.props.data;
    let { data } = this.props.data;
    console.log(data)
    return (
      <div>
        <CustomeCarousel banner={banner}></CustomeCarousel>
        <List className="my-list">
          {
            data.map((item) => {
              return (
                <Item
                  key={item.hash}
                  extra={<i style={{fontSize: '1rem'}}
                    className="iconfont icon-xiazai"></i>}
                  onClick={() => { }}
                >{item.filename}</Item>
              )
            })
          }
          
        </List>
      </div>
    )
  }
}

export default getDataComponent('getNewSongs')(NewSong)