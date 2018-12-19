// pages/home/home.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // msg:"这是来自js的文件的msg数据",
    // num:666,
    // bl:false,
    //data属性内的数据可以通过数据的属性名称直接调用早wxml
    //不要在data内定义函数，否则函数无法被调用
    // swiperArr: [
    //   { "image_src": "/upload/banner1.png", },
    //   { "image_src": "/upload/banner2.png", },
    //   { "image_src": "/upload/banner3.png", }
    // ]
    swiperArr: [],
    tuijianArr:[],
    freeContent:{},
    studygodArr:[],
    hobbiesArr:[],
    skillpromoteArr:[],
    childrenTeachArr:[]
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
   // console.log(that);
    // console.log(options);
    // console.log(app.globalurl);
    wx.request({
      // 请求地址
      url:                                                        'http://web.fxhkapp.com/web/v1/find/index',
      // 请求方式
      method: 'POST',
      // 参数
      data: {
        lat: '122',
        lng: '23'
      },
      //post和get的type是不同的
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      // 请求成功的回调函数
      success(res) {
        // 通过直接赋值的方式是不能更新视图层的，容易造成数据不同步问题
        //  that.data.swiperArr = res.data.data;
        // setData 方法主要功能非常重要，主要有以下作用
        //   1. 更新逻辑层数据
        //   2. 更新视图层界面
        that.setData({
          swiperArr: res.data.data.adList,
          tuijianArr: res.data.data.recommendList,
          freeContent:res.data.data.freeContent,
          studygodArr: res.data.data.courseMap.type_1,
          hobbiesArr: res.data.data.courseMap.type_2,
          skillpromoteArr: res.data.data.courseMap.type_3,
          childrenTeachArr: res.data.data.courseMap.type_4
        });
        //console.log(that.data.swiperArr);

       },
      fail(res) {
        console.log("请求失败", res);
      }
    });


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log("onReady");
  },
  /**自定义调用的方法两种写法*/
  testHandle: function () {
    console.log("测试事件绑定是否成功");
  },
  sonHandle(event) {
    console.log("子元素绑定的事件vvv");
    console.log(event.currentTarget.dataset.para);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //console.log("onshow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //console.log("onhide");
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