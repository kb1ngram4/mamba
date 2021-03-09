<template>
  <view class="wrap">
    <view class="search">
      <view class="searchContent">
        <image class="img" :src="imageSrc"></image>
        <input
          type="text"
          class="input"
          @focus="inputFocus"
          @blur="inputBlur"
          placeholder="请输入搜索内容"
          focus="auto"
        />
      </view>
    </view>
    <view class="close" @tap="close">取消</view>
  </view>
</template>
<script>
import imageSrc from "../../assets/img/blackSearch.png";
export default {
  data() {
    return {
      imageSrc: imageSrc,
    };
  },
  onReady() {
    this.taro.setNavigationBarTitle({
      title: "搜索",
    });
  },
  methods: {
    inputFocus(e) {
      // this.taro.setData({
      //   inputBottom:e.detail.height
      // })
    },
    inputBlur(e) {
      // this.setData({
      //   content:e.detail.value,
      //   inputBottom:0
      // })
    },
    close() {
      this.taro.switchTab({
        url: "../../pages/index/index",
      });
    },
  },
};
</script>
<style lang="scss">
.wrap {
  position: relative;
  left: 10px;
  top: 100px;
  display: flex;
  .search {
    display: flex;
    width: 550px;
    height: 80px;
    border: 1px solid grey;
    border-radius: 40px;
    .searchContent {
      display: flex;
      margin-left: 10px;
      .img {
        height: 40px;
        width: 40px;
        align-self: center;
        margin-left: 10px;
        margin-right: 20px;
      }
      .input {
        caret-color: green;
        font-size: 40px;
        // height: 60px;
        align-self: center;
        // border: 2px solid #000;
        // border-radius: 20px 20px 20px 20px;
      }
    }
  }
  .close {
    font-size: 40px;
    align-self: center;
    margin-left: 30px;
    color: goldenrod;
  }
}
</style>