<template>
  <Card>
    <div slot="title">{{ title }}</div>
    <a href="#" slot="extra"> 更多 </a>
    <div ref="pie1" class="pie1"></div>
    <div ref="pie2" class="pie2"></div>
  </Card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "XXX" },
  },
  data() {
    return {
      options1: {
        color: ["#F7BE00", "#5A8EF8"],
        tooltip: {
          trigger: "item",
          confine: true,
          appendToBody: true,
          formatter: "{b} {c}%",
        },
        legend: {
          data: ["已使用", "未使用"],
          bottom: 18,
          itemWidth: 7,
          itemHeight: 7,
          icon: "circle",
          textStyle: { fontSize: "9px" },
        },
        series: [
          {
            // name: "访问来源",
            type: "pie",
            radius: ["25%", "50%"],
            // avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 37, name: "已使用" },
              { value: 73, name: "未使用" },
            ],
          },
        ],
      },
      options2: {
        color: ["#F7BE00", "#5A8EF8", "#75CBED", "#FF8658", "#73DEB3"],
        tooltip: {
          trigger: "item",
          confine: true,
          appendToBody: true,
          formatter: "{b} {c}%",
        },
        legend: {
          data: ["已使用", "未使用", "未通过", "未验收", "未见明"],
          bottom: 0,
          itemWidth: 7,
          itemHeight: 7,
          icon: "circle",
          textStyle: { fontSize: "9px" },
        },
        series: [
          {
            // name: "访问来源",
            type: "pie",
            radius: ["25%", "50%"],
            // avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 37, name: "已使用" },
              { value: 10, name: "未使用" },
              { value: 25, name: "未通过" },
              { value: 23, name: "未验收" },
              { value: 5, name: "未见明" },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$echarts.init(this.$refs.pie1).setOption(this.options1);
      this.$echarts.init(this.$refs.pie2).setOption(this.options2);
    });
  },
};
</script>

<style lang="less" scoped>
.pie1,
.pie2 {
  position: absolute;
  top: 0;
  height: 99%; // 设置100%会出现滚动条
  width: 50%;
}
.pie1 {
  left: 0;
}
.pie2 {
  left: 50%;
}
</style>