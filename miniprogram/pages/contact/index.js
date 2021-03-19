const app = getApp()

Page({
  data: {
    msg: "welcome",
    num: 0,
    latitude: 0,
    longitude: 0,
    text: ""
  },
  setMap() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res)
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
        this.setData({
          latitude: latitude,
          longitude: longitude
        })
      }
    })
  },
  clickMe() {
    this.setData({
      msg: "点击了" + this.data.num + "次",
      num: this.data.num + 1
    }, function () {
      console.log("clickMe")
    })
    console.log(this.data.msg)
  },
  onLoad(options) {
    console.log("onLoad")
    console.log(options)
    this.data.msg = "10086"
    console.log(this.data.msg)
    this.setMap()
  },
  onReady() {
    console.log("onReady")
  },
  onShow() {
    console.log("onShow")
  },
  onHide() {
    console.log("onHide")
  },
  onUnpoad() {
    console.log("onUnpoad")
  },
  onPullDownRefresh() {
    console.log("onPullDownRefresh")
  },
  onReachBottom() {
    console.log("onReachBottom")
  },
  onShareAppMessage() {
    console.log("onShareAppMessage")
  },
  onPageScroll() {
    console.log("onPageScroll")
  },
  onResize() {
    console.log("onResize")
  },
  onTabItemTap(item) {
    console.log("onTabItemTap")
    console.log(item)
  },
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
      console.log(text)
    })
  },
})