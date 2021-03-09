<template>
  <view class="index">
    <!-- <text @tap="handle">{{ msg }}</text> -->
    <view class="header">
      <input class="search" type="text">
    </view>
    <view  @tap="handle" class="content"></view>
    <view class="footer"></view>
  </view>
</template>

<script>
import './index.scss'
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  methods:{
    handle(){
      this.taro.switchTab({
        url:"../profile/index"
      })
    }
  }
}
</script>
<style lang="scss" >
.index{
  width: 100%;
  height: 100vh;
  background: #e1e1e1;
  font-size: 20px;
  overflow: scroll;
  >.header{
    height: 50%;
    background:url("../../assets/img/bgBall.jpg") no-repeat center;
    .search{
      width: 1000px;
      height: 100px;
      border: 2px solid;
      border-radius: 20px 20px 20px 20px;
    }
  }
  >.content{
    width: 100%;
    height: 1000px;
    background: greenyellow;
  }
  >.footer{
    width: 100%;
    height: 1000px;
    background: red;
  }
}
</style>
