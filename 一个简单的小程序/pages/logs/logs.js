Page({
  onTap: function (event) {
    // wx.navigateTo({
    //     url:"../posts/post"
    // });
    wx.switchTab({
      url: "../index/index"
    });

  },
  onReachBottom: function (event) {
    console.log('asfasdfa')
  }
})