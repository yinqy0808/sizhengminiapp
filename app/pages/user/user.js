const app = getApp()
Page({
	data: {
		//用户全局信息
		userInfo: {}
	},
  // onLoad: function (options) {
  //   console.log(app.globalData.userInfo)
  //  this.setData({
  //    userInfo:app.globalData.userInfo
  //  })
  // },
  onLoad: function (options) {
    var that = this;
    console.log(app.globalData.userInfo)
    this.setData({
      userInfo:app.globalData.userInfo,
      // login_status:false
    })
    console.log(app.globalData.openid)
    wx.cloud.database().collection('login_users').where({
      _openid: app.globalData.openid
    })
    .get({
      success: function(res){
        if(res.data.length==0){
          console.log('not find the user')
          that.setData({
            login_status:false
          })
        }
        else{
          console.log("find the user")
          that.setData({
            login_status:true
          })
        }
      }
    })
  },
  // 跳转至登录login页面的回调
  toLogin(){
    this.setData({
      login_status:true
    })
  wx.getUserProfile({
    desc:'用于信息完善',//不写不弹提示框
    success:function(res){
      console.log(res.userInfo)
      var user = res.userInfo
      app.globalData.userInfo = user
      that.setData({
        result:'ok',// 结果
        userInfo:user,
        nickName:user.nickName,// 微信昵称
        avatarUrl:user.avatarUrl,// 微信头像
      })
      console.log('获取成功: ',res)
      wx.cloud.database().collection('login_users').where({
        _openid:app.globalData.openid
      }).get({
        success(res)
        {
          console.log(res)
          if(res.data.length==0){
            wx.cloud.database().collection('login_users').add({
              data:{
                avatarUrl : user.avatarUrl,
                nickName : user.nickName,
              },
              success(res){
                console.log(res)
                wx.showToast({
                  title: '登陆成功',
                  icon: 'success',
                  duration: 1000
                })
              }
            })
          }else{
            that.setData({
              userInfo:res.data[0]
            })
          }
        }
      })
    },

   })
    var that = this
  },
  goNext1: function (){
    wx.switchTab({
      url: '/pages/video/video',
    })
  },
  goNext2: function (){
    wx.switchTab({
      url: '/pages/hot/hot',
    })
  }
});
