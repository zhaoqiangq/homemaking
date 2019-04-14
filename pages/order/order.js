// pages/order/order.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listdata:[],
    page:1,
    isnull:false,
    ismore:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.zhaoxiaoqiang.com/site/my-order?openid=' + app.openid + '',
      data: {
        page:that.data.page
      },
      success(res) {
        console.log(res);
        if (res.data.data.data.length==0){
          that.setData({
            isnull: true
          })
          return;
        }
        that.setData({
          listdata: res.data.data.data
        })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    that.setData({
      page:that.data.page+1
    })
    wx.request({
      url: 'https://www.zhaoxiaoqiang.com/site/my-order?openid=' + app.openid + '',
      data: {
        page: that.data.page
      },
      success(res) {
        if (res.data.data.data.length == 0) {
          that.setData({
            ismore: true
          })
          return;
        }
        var concatdata = that.data.listdata.concat(res.data.data.data)
        that.setData({
          listdata: concatdata
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})