// components/area.js
const { list } = require('../tools/area.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerStr: {
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    province: [],
    city: '',
    area: '',
    animationData: {},
    areaObj: null,
    value: [0, 0, 0]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _dianji: function (e) {
      //这里写了一个动画，让其高度变为满屏
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animation = animation
      animation.height(1332 + 'rpx').step()
      this.setData({
        animationData: animation.export()
      })
    },
    _close: function () {
      this._admCofing()
    },
    _admCofing() {
      //这里也是动画，然其高度变为0
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animation = animation
      animation.height(0 + 'rpx').step()
      this.setData({
        animationData: animation.export()
      });
    },
    _confirm() {
      this._array()
      this.triggerEvent('myevent', { value: this.data.areaObj })
      this.setData({ innerStr: this.data.areaObj.province.name + this.data.areaObj.city.name + this.data.areaObj.area.name })
      this._admCofing()
    },
    _array() {
      const array = this.data.value
      const data = this.data.province
      let obj = {
        province: data[array[0]],
        city: data[array[0]].children[array[1]],
        area: data[array[0]].children[array[1]].children[array[2]]
      }
      this.setData({ areaObj: obj })
    },
    _bindChange(e) {
      const array = e.detail.value
      this.setData({ value: array })
      this._array()
    }
  },
  ready: function () {
    this.setData({
      province: list()
    })
  }
})
