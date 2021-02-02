<template>
  <div class="integration">
    <MyHeader />

    <router-view class="integration-body" />

    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./components/header";
import MyFooter from "./components/footer";

export default {
  name: "Integration",
  components: {
    MyHeader,
    MyFooter,
  },

  methods: {},
};
</script>

<style lang="less" scoped>
// 不可省略
.integration {
  height: 100%;
  width: 100%;

  .integration-body {
    width: @integration-body-width;
    margin: 0 auto;
    min-height: @integration-body-min-height;
  }
}
</style>