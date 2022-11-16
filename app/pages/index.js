
Page({
	data: {
		//用户全局信息
		userInfo: {},
		tabs1Datas: [
			{ text: `热点`, icon: `` },
			{ text: `视频`, icon: `` }
		],
    tabs1Index: 0,
    imgUrl1:'https://red-ideological-and-political-classroom.oss-cn-beijing.aliyuncs.com/index/sj1.png?versionId=CAEQJhiBgIDBlrLdlBgiIGRkODZmMjU3MjUyZTQyYzBhZTBjMjkxNGIwOWEyMDU5',
    imgUrl2:'https://red-ideological-and-political-classroom.oss-cn-beijing.aliyuncs.com/index/sj2.png?versionId=CAEQJhiCgIDllLLdlBgiIDA3NDc1NmUwYmE2ZjRhZjJiOTNlYWE1ZTlkMjE0YTJl',
    imgUrl3:'https://red-ideological-and-political-classroom.oss-cn-beijing.aliyuncs.com/index/sj3.png?versionId=CAEQJhiBgIDYlLLdlBgiIDQ2OWY5NTRhYTg5YzQxNTY5MDU4YjAzYmU0ZmEwZDcw',
    imgUrl4:'https://red-ideological-and-political-classroom.oss-cn-beijing.aliyuncs.com/index/sj44.png?versionId=CAEQJhiBgICPlLLdlBgiIDljNDYyNThjZTRkZDQxZGI4M2M0ZTlhM2FjOWMzZjA1',
	},
	onLoad(option) {
		this.init();
  },
	onShareAppMessage() {},
	onShareTimeline() {},
	onShow() {},
	async init() {},
	changeTabs1(evt) {
		let { index } = evt.currentTarget.dataset;
		if (index == this.data.tabs1Index) return;
		this.setData({
			tabs1Index: index
		});
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
  },
  //点击事件1  
clickImg1: function(e){
  var imgUrl = this.data.imgUrl1;
  wx.previewImage({
    urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
    current: '', // 当前显示图片的http链接，默认是第一个
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
},
  //点击事件2  
  clickImg2: function(e){
    var imgUrl = this.data.imgUrl2;
    wx.previewImage({
      urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
      current: '', // 当前显示图片的http链接，默认是第一个
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
    //点击事件3  
clickImg3: function(e){
  var imgUrl = this.data.imgUrl3;
  wx.previewImage({
    urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
    current: '', // 当前显示图片的http链接，默认是第一个
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
},
  //点击事件4  
  clickImg4: function(e){
    var imgUrl = this.data.imgUrl4;
    wx.previewImage({
      urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
      current: '', // 当前显示图片的http链接，默认是第一个
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
});


