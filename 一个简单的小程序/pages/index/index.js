var indexData = require('../../data/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(indexData)
    this.setData({
      indexData: indexData.postList
    })
    console.log(this.data.indexData);
  }
})