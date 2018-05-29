const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
  _confirm(e){
      const params = e.detail.value
      wx.showModal({
        title: '提示',
        content: '选中：' + params.province.name + '/' + params.city.name + '/' + params.area.name + '    ' + 'id:' + params.province.id + '-' + params.city.id + '-' + params.area.id,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
  }
})
