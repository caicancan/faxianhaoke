//list.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    userListInfo: [{
      icon: '../../images/minebook.png',
      text: '我的证书',
  
    }, {
      icon: '../../images/minecollection.png',
      text: '我的收藏',
    }, {
        icon: '../../images/minereconnend.png',
      text: '推荐给好友',
      // isunread: true,
      // unreadNum: 1
    }, {
        icon: '../../images/minesuggestion.png',
      text: '意见反馈'
    }, {
       icon: '../../images/minesetting.png',
      text: '设置'
    }]
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})