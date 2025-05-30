// pages/index/index.js
Page({
  data: {
    latitude: 2.54309,
    longitude: 11.3242,
    markers: [{
      id: 1,
      latitude: 2.54309,
      longitude: 11.3242,
      name: '当前位置'
    }],
  },
  onLoad: function (options) {
    // 页面加载时获取用户位置
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        this.setData({
          latitude,
          longitude,
          markers: [{
            id: 1,
            latitude,
            longitude,
            name: '当前位置'
          }]
        })
      }
    })
  },
  // 开始工作
  startWork: function() {
    wx.navigateTo({
      url: '/pages/work/work',
    })
  },
  // 查看配送热区图
  viewHotZone: function() {
    wx.navigateTo({
      url: '/pages/hotzone/hotzone',
    })
  },
  // 查看个人数据
  viewPersonalData: function() {
    wx.navigateTo({
      url: '/pages/data/data',
    })
  }
})
