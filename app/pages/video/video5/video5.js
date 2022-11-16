const db = wx.cloud.database().collection('shoucang');
Page({
	data: {
		//用户全局信息
		userInfo: {},
		text5: `<p><span style="font-size: 18px;"><span style="color: #000000;">评论</span></span></p>`
	},
	onLoad(option) {
    db.doc('b69f67c062faf7c11188c44c5004585e').get({
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
      db.doc('b69f67c062faf7c11188c44c5004585e').update({
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
      db.doc('b69f67c062faf7c11188c44c5004585e').update({
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
