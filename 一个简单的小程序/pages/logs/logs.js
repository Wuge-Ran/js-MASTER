Page({
  onTap: function (event) {
    wx.redirectTo({
        url:"../index/index"
    });

  },
  onReachBottom: function (event) {
    console.log('asfasdfa')
  }
})