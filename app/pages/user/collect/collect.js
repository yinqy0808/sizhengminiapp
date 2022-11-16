const db = wx.cloud.database().collection('shoucang');
Page({
	data: {
		//用户全局信息
		userInfo: {},
		tabsDatas: [
			{ text: `全部`, icon: `` },
			{ text: `党政学习`, icon: `` },
			{ text: `主题党日活动`, icon: `` },
			{ text: `革命精神`, icon: `` }
		],
		tabsIndex: 0
	},
	onLoad(option) {
		db.doc('8f75309d62faf77114d799283628c611').get({
      success: res => {
        console.log("res.data.status1",res.data.status);
      this.setData({
        status1:res.data.status
      })
      }
      })
    db.doc('8f75309d62faf78714d79b915f35702f').get({
      success: res => {
        console.log("res.data.status2",res.data.status);
      this.setData({
        status2:res.data.status
      })
      }
      })
    db.doc('8f75309d62faf79c14d7a0782ee53925').get({
      success: res => {
        console.log("res.data.status3",res.data.status);
      this.setData({
        status3:res.data.status
      })
      }
      })
    db.doc('0a4ec1f962faf7aa19c749af3ade86e1').get({
      success: res => {
        console.log("res.data.status4",res.data.status);
      this.setData({
        status4:res.data.status
      })
      }
      })
    db.doc('b69f67c062faf7c11188c44c5004585e').get({
      success: res => {
        console.log("res.data.status5",res.data.status);
      this.setData({
        status5:res.data.status
      })
      }
      })
    db.doc('058dfefe62faf7d9154fe03b142488ba').get({
      success: res => {
        console.log("res.data.status6",res.data.status);
      this.setData({
        status6:res.data.status
      })
      }
      })
    db.doc('16db756f62faf7eb1138240b1f74e12a').get({
      success: res => {
        console.log("res.data.status7",res.data.status);
      this.setData({
        status7:res.data.status
      })
      }
      })
	},
	onShareAppMessage() {},
	onShareTimeline() {},
	onShow() {},
	async init() {},
	changeTabs(evt) {
		let { index } = evt.currentTarget.dataset;
		if (index == this.data.tabsIndex) return;
		this.setData({
			tabsIndex: index
		});
	}
});
