import React, { Component } from 'react'
import { List } from 'antd-mobile';
const Item = List.Item;

export default class Songlist extends Component {
  static defaultProps = {
    songList:[]
  }
  render() {
    return (
      <div>
        <List className="my-list">
          {
            this.props.songList.map((item) => {
              return (
                <Item
                  key={item.hash}
                  extra={<i style={{ fontSize: '1rem' }}
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
