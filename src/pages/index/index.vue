<template>
  <view class="index">
    <!-- <text @tap="handle">{{ msg }}</text> -->
    <view class="header">
      <view class="search" @tap="search">
        <!-- <img :src="searchImg" alt=""> -->
        <image :src="searchImg" class="img"></image>
        <text>搜索服务、事项</text>
      </view>
      <view class="schedule">
        <view class="scheduleItem" v-for="item in scheduleList" :key="item.id">
          <image class="img" :src="item.src"></image>
          <view class="text">{{ item.text }}</view>
        </view>
      </view>
    </view>
    <view @tap="handle" class="content"></view>
    <view class="footer"></view>
  </view>
</template>

<script>
import "./index.scss";
// import mine from "../../assets/img/mine.png";
import search from "../../assets/img/search.png";
import scanImg from "../../assets/scheduleImg/richscan_icon.png";
import code from "../../assets/scheduleImg/code.png";
import service from "../../assets/scheduleImg/service.png";
import Id from "../../assets/scheduleImg/certificate.png";
import crown from "../../assets/scheduleImg/crown.png";

export default {
  data() {
    return {
      msg: "Hello world!",
      searchImg: search,
      scheduleList: [
        { id: 1, src: scanImg, text: "扫一扫" },
        { id: 2, src: code, text: "随身码" },
        { id: 3, src: Id, text: "亮证" },
        { id: 4, src: service, text: "客服" },
        { id: 5, src: crown, text: "专属" },
      ],
    };
  },
  methods: {
    handle() {
      this.taro.switchTab({
        url: "../profile/index",
      });
    },
    search() {
      this.taro.navigateTo({
        url: "../../components/search/index",
      });
    },
  },
};
</script>
<style lang="scss" >
.index {
  width: 100%;
  height: 100vh;
  background: #e1e1e1;
  font-size: 20px;
  overflow: scroll;
  > .header {
    height: 50%;
    background: url("../../assets/img/bgBall.jpg") no-repeat 50% 50%;
    .search {
      color: #fff;
      font-size: 35px;
      line-height: 60px;
      position: relative;
      left: 30px;
      top: 200px;
      width: 550px;
      height: 60px;
      border: 2px solid;
      border-radius: 20px 20px 20px 20px;
      .img {
        position: relative;
        left: 10px;
        top: 7px;
        margin-right: 10px;
        width: 40px;
        height: 40px;
      }
    }
    .schedule {
      display: flex;
      justify-content: space-around;
      position: relative;
      top: 230px;
      height: 120px;
      .scheduleItem {
        width: 120px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        .img {
          width: 60px;
          height: 60px;
        }
        .text {
          font-size: 30px;
          color: #fff;
        }
      }
    }
  }
  > .content {
    width: 100%;
    height: 1000px;
    background: greenyellow;
  }
  > .footer {
    width: 100%;
    height: 1000px;
    background: red;
  }
}
</style>
