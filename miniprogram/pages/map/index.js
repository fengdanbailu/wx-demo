Page({
  data: {
    latitude: 0,
    longitude: 0,
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
  onLoad(options) {
    this.setMap()
  },
  onReady() {
    console.log("map:onReady")
  },
  onShow() {
    console.log("map:onShow")
  },
  onHide() {
    console.log("map:onHide")
  },
  onUnpoad() {
    console.log("map:onUnpoad")
  },
  onPullDownRefresh() {
    console.log("map:onPullDownRefresh")
  },
  onReachBottom() {
    console.log("map:onReachBottom")
  },
  onShareAppMessage() {
    console.log("map:onShareAppMessage")
  },
  onPageScroll() {
    console.log("map:onPageScroll")
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