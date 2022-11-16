
Page({
	data: {
		//用户全局信息
		userInfo: {},
		tabsDatas: [
			{ text: `推荐`, icon: `` },
			{ text: `要闻`, icon: `` },
			{ text: `思想`, icon: `` },
			{ text: `实播中国`, icon: `` }
		],
		tabsLeft: 0,
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
			tabsLeft: (index - 1) * 60,
			tabsIndex: index
		});
	}
});
