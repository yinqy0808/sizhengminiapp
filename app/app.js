
require('./page-extend');
App({
	globalData: {
		userInfo: null,
		tabBar: [],
		homePage: '/pages/index',
		pages: ['/pages/index', '/pages/hot/hot', '/pages/user/user', '/pages/login', '/pages/register', '/pages/ceshi', '/pages/video1', '/pages/video2', '/pages/video3', '/pages/video4', '/pages/video5', '/pages/video6', '/pages/video7'],
		userData: {}
	},
	onLaunch() {
    wx.cloud.init({
      env:"html2-3g1hg6g69dcc54e6",
      traceUser: true,
    })
    var that = this;
    wx.cloud.callFunction({
      name:'login_get_openid',
      success(res)
      {
        console.log(res)
        that.globalData.openid =res.result.openid
        wx.cloud.database().collection('login_users').where({
          _openid:res.result.openid
        }).get({
            success(result){
              console.log(result)
              that.globalData.userInfo = result.data[0]
            }
        })
      }
    })
		wx.getSystemInfo({
			success: (e) => {
				this.globalData.StatusBar = e.statusBarHeight;
				let capsule = wx.getMenuButtonBoundingClientRect();
				this.globalData.WindowWidth = e.windowWidth;
				this.globalData.PixelRatio = 750 / e.windowWidth;
				if (capsule) {
					this.globalData.Custom = capsule;
					this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
				} else {
					this.globalData.CustomBar = e.statusBarHeight + 50;
				}
			}
		});
	},
	onShow() {},
	onHide() {}
});
