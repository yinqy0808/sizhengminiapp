const db = wx.cloud.database().collection('shoucang');
Page({
	data: {
		//用户全局信息
		userInfo: {},
		text1: `<p><span style="font-size: 18px;"><span style="color: #000000;">评论</span></span></p>`
	},
	onLoad(option) {
    db.doc('16db756f62faf7eb1138240b1f74e12a').get({
      success: res => {
        console.log("res.data.status",res.data.status);
      this.setData({
        status:res.data.status
      })
      }
      })
  },
  focusFavoriteTab: function (e) {
    var that = this;
    console.log("status",this.data.status)
    var status = that.data.status;
    if (status) {
      db.doc('16db756f62faf7eb1138240b1f74e12a').update({
        data: {
          status:false,
        },
        success :(res)=> {
          console.log("res",res)
        },
      }),
      wx.showToast({
        title: "取消收藏",
        icon: 'success',
        duration: 1000
      });
      this.setData({
        status: false,
      });
      } else {
      db.doc('16db756f62faf7eb1138240b1f74e12a').update({
        data: {
          status:true,
        },
        success :(res)=> {
          console.log("res.data",res.data)
        },
      }),
      wx.showToast({
        title:"收藏成功",
        icon: 'success',
        duration: 1000
      });
      this.setData({
        status: true,
      });
      }
  },
	onShareAppMessage() {},
	onShareTimeline() {},
	onShow() {},
	async init() {}
});
