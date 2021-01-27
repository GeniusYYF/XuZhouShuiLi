<template>
  <Layout class="back-system">
    <Header>
      <MyHeader />
    </Header>

    <Layout class="content">
      <Sider> <MySider /></Sider>

      <Layout>
        <Header><MyMenuCards /></Header>
        <Content> <router-view /></Content>
        <Footer><MyFooter /></Footer>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
import MyHeader from "./components/header";
import MySider from "./components/sider";
import MyMenuCards from "./components/menu-crads";
import MyFooter from "./components/footer";

export default {
  name: "BackSystem",
  components: {
    MyHeader,
    MySider,
    MyMenuCards,
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
    height: @back-aside-height;
  }

  .ivu-layout-sider {
    width: @back-aside-width !important;
    min-width: @back-aside-width !important;
    flex: unset !important;
  }

  .ivu-layout-content {
    padding: @back-content-padding;
    height: @back-aside-height;
    overflow-y: auto;
  }
}
</style>