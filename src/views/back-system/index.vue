<template>
  <Layout class="back-system">
    <Header>
      <MyHeader />
    </Header>

    <Layout class="content">
      <router-view />
    </Layout>

    <Footer><MyFooter /></Footer>
  </Layout>
</template>

<script>
import MyHeader from "./components/header";
import MyFooter from "./components/footer";

export default {
  name: "BackSystem",
  components: {
    MyHeader,
    MyFooter,
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.back-system {
  height: 100%;
  width: 100%;

  .content {
    height: @back-body-height;
  }
}
</style>