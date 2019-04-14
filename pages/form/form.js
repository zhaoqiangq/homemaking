// pages/form/form.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    price:'',
    multiArray: [[], [], []],
    multiIndex:'',
    time:'',
    nameValue:'',
    phoneValue: null,
    siteValue: '',
    pickername:'请选择时间'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name,
      price: options.price
    })
    this.pickerTap();
    
  },
  pickerTap: function () {
    var date = new Date();

    var monthDay = [];
    var hours = [];
    var minute = [];

    // 月-日
    for (var i = 0; i <= 365; i++) {
      var date1 = new Date(date);
      date1.setDate(date.getDate() + i);
      var md = (date1.getMonth() + 1) + "月" + date1.getDate()+"日";
      monthDay.push(md);
    }

    // 时
    for (var i = 0; i < 25; i++) {
      hours.push(i);
    }

    // 分
    for (var i = 0; i < 60; i += 10) {
      if(i==0){
        minute.push('00');
      }else{
        minute.push(i);
      }
    }

    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiArray[0] = monthDay;
    data.multiArray[1] = hours;
    data.multiArray[2] = minute;
    this.setData(data);
  },
  bindStartMultiPickerChange: function (e){
    this.setData({
      time: this.data.multiArray[0][e.detail.value[0]] + this.data.multiArray[1][e.detail.value[1]] + '点' + this.data.multiArray[2][e.detail.value[2]]+'分',
      pickername:''
    })
  },  
  bindNameInput: function(e){
    this.setData({
      nameValue: e.detail.value
    })
  },
  bindPhoneInput: function (e) {
    this.setData({
      phoneValue: e.detail.value
    })
  },
  bindSiteInput: function (e) {
    this.setData({
      siteValue: e.detail.value
    })
  },
  binSubmit: function(){
    var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if (this.data.nameValue == '') {
      wx.showToast({
        title: '请输入名称',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (!myreg.test(this.data.phoneValue)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (this.data.time == '') {
      wx.showToast({
        title: '请选择时间',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (this.data.siteValue==''){
      wx.showToast({
        title: '请输入地址',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    wx.request({
      url: 'https://www.zhaoxiaoqiang.com/site/make-note?openid=' + app.openid +'', 
      method: "POST",
      data: {
        phone: this.data.phoneValue,
        service_name: this.data.name,
        price: this.data.price,
        doing_at: this.data.time,
        address: this.data.siteValue,
        customer_name: this.data.nameValue
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'  
      },
      success(res) {
        if (res.data.status==200){
          wx.showToast({
            title: '预约成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function(){
            wx.switchTab({
              url: '/pages/index/index'
            })
          },2000)
        }
      }
    })

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