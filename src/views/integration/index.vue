<template>
  <div class="integration">
    <MyHeader />

    <router-view />

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
}
</style>