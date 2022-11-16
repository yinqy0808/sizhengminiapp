
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
		this.init();
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
