<template>
  <view class="index">
    <text @tap="handle">{{ msg }}</text>
  </view>
</template>

<script>
import './index.scss'

export default {
  data () {
    return {
      msg: '我的'
    }
  },
  methods:{
    handle(){
      this.taro.navigateTo({
        url:"../../components/personalAssets/index"
      })
    }
  }
}
</script>
