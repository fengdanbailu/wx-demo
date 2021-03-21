Page({
  data: {
    msgNumber: 17,
    list: [{
        imagurl: '/images/wechatHL.png',
        name: '刘桐风',
        date: '13:53',
        info: '等疫苗吧'
      },
      {
        imagurl: '/images/wechatHL.png',
        name: '枫丹白露',
        date: '星期三',
        info: ' 501498361'
      },
      {
        imagurl: '/images/wechat.png',
        name: '袁丽娜',
        date: '星期一',
        info: '嗯。'
      },
      {
        imagurl: '/images/wechatHL.png',
        name: '一家子',
        date: '星期一',
        info: '[图片]'
      },
      {
        imagurl: '/images/wechat.png',
        name: '小站技术交流 01 群',
        date: '14:12',
        info: '[57条]爽shi(David)：[衰]'
      },
      {
        imagurl: '/images/wechatHL.png',
        name: '订阅好消息',
        date: '13:46',
        info: '[23条]AI前线：0.5元一份人脸信息!业界...'
      },
    ]
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: "模仿页面-微信"
    })
    wx.showTabBarRedDot({
      index: 1,
    })
    wx.setTabBarBadge({
      index: 0,
      text: this.data.msgNumber + '',
    })
  }
})