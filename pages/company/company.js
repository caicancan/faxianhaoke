// pages/company/company.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isFolded: true,
    courseArr:[],
    companyDetail:{} 
  },
  changeText: function (e) {
    this.setData({
      isFolded: !this.data.isFolded,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      orgId: options.orgid,
    });
    wx.request({
      url: 'http://web.fxhkapp.com/web/v1/find/orgDetail',
      // 请求方式
      method: 'GET',
      // 参数
      data: {
        id: that.data.orgId,
      },
      //post和get的type是不同的
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      // 请求成功的回调函数
      success(res) {
        console.log("请求成功", res);
        // 通过直接赋值的方式是不能更新视图层的，容易造成数据不同步问题
        //  that.data.swiperArr = res.data.data;
        // setData 方法主要功能非常重要，主要有以下作用
        //   1. 更新逻辑层数据
        //   2. 更新视图层界面
        that.setData({
          companyDetail: res.data.data,
          courseArr:res.data.data.courseList
        });

      },
      fail(res) {
        console.log("请求失败", res);
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