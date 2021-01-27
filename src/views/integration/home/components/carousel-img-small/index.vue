<template>
  <Carousel
    class="carousel-small"
    v-model="value"
    loop
    
    :autoplay-speed="5000"
  >
    <CarouselItem v-for="(item, i) in imgList" :key="i">
      <img class="img" :src="require(`@/assets/integration/home/${item.name}.png`)" />
      <div class="title">{{ item.title }}</div>
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  name: "CarouselImgSamll",
  data() {
    return {
      value: 0,
      imgList: [
        {
          name: "bitmap",
          title: "市河长办赴济宁协调推进南四湖水环境治理保护工作",
        },
        {
          name: "bitmap",
          title: "市河长办赴济宁协调推进南四湖水环境治理保护工作",
        },
        {
          name: "bitmap",
          title: "市河长办赴济宁协调推进南四湖水环境治理保护工作",
        },
        {
          name: "bitmap",
          title: "市河长办赴济宁协调推进南四湖水环境治理保护工作",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.carousel-small {
  // 让走马灯尺寸自适应
  &,
  /deep/ .ivu-carousel-list,
  /deep/ .ivu-carousel-track {
    height: 100%;
  }

  /deep/ .ivu-carousel-item {
    height: 100% !important;
  }

  .img {
    height: inherit;
    width: inherit;
  }

  .title {
    // 走马灯有的时候会底部会留5px空白
    margin-top: -55px;
    height: 50px;
    line-height: 50px;
    position: relative;
    color: rgb(255, 255, 255);
    font-size: 15px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 1vw;
  }

  // 更改组件内部dots
  /deep/ .ivu-carousel-dots {
    bottom: 0;
    right: 1vw;
    width: auto;
    height: auto;

    li {
      margin: 7px;
      vertical-align: middle;

      button {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        opacity: 0.8;
        background-color: #f1f1f6;
      }
      &.ivu-carousel-active {
        button {
          border-radius: 50%;
          width: 16px;
          height: 16px;
          background-color: #fff;
          opacity: 1;
        }
      }
    }
  }
}
</style>