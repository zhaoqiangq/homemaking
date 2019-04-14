// pages/advertising/advertising.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        imgsrc:'../../images/banner1.jpg',
        name:'保姆',
        price:"1500元/月"
      },
      {
        imgsrc: '../../images/banner2.jpg',
        name: '月嫂',
        price: "3500元/月"
      },
      {
        imgsrc: '../../images/banner3.jpg',
        name: '护工',
        price: "350元起/天"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})