<template>
  <Menu
    class="menu menu-scroll"
    theme="light"
    :active-name="activeName"
    :open-names="openNames"
    width="200px"
  >
    <MenuItemSelf
      v-for="(item, i) in siderDatas"
      :key="i"
      :item="item"
      :i="i"
      :name="i + 1 + ''"
    ></MenuItemSelf>
  </Menu>
</template>

<script>
import MenuItemSelf from "./components/menu-item";

export default {
  components: { MenuItemSelf },
  data() {
    return {
      openNames: ["1"],
      activeName: "1",
      // 最好除了末项都有icon
      siderDatas: [
        {
          title: "我的主页",
          path: "homepage",
          icon: "md-home",
          children: null,
        },
        {
          title: "水库管理",
          path: null,
          icon: "ios-navigate",
          children: [
            {
              title: "水库项目管理",
              path: "reservoir",
              icon: null,
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: "ios-people",
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: "ios-people",
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: "ios-people",
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: "ios-people",
              children: null,
            },
          ],
        },
        {
          title: "一级导航",
          path: null,
          icon: "ios-people",
          children: [
            {
              title: "二级导航",
              path: null,
              icon: "ios-people",
              children: [
                {
                  title: "三级导航",
                  path: null,
                  icon: null,
                  children: null,
                },
                {
                  title: "三级导航",
                  path: null,
                  icon: null,
                  children: null,
                },
              ],
            },
            {
              title: "二级导航",
              path: null,
              icon: null,
              children: null,
            },
          ],
        },
        {
          title: "一级导航",
          path: null,
          icon: "ios-navigate",
          children: null,
        },
        {
          title: "一级导航",
          path: null,
          icon: null,
          children: [
            {
              title: "二级导航",
              path: null,
              icon: null,
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: null,
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: null,
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: null,
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: null,
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: null,
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: null,
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: null,
              children: null,
            },
            {
              title: "二级导航",
              path: null,
              icon: null,
              children: null,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@space: 10px;
.menu {
  height: @back-aside-height;
  width: @back-aside-width !important;
  text-align: left;
  overflow-x: hidden;
  overflow-y: auto;

  /deep/ .ivu-menu-submenu-title,
  /deep/ .ivu-menu-item {
    font-size: 1.8vh;
    font-weight: 700;
    padding-top: @space;
    padding-bottom: @space;
    // 左icon
    /deep/ .ivu-icon {
      font-size: 2.5vh;
    }
    // 右icon
    .ivu-menu-submenu-title-icon {
      right: @space;
    }
    // 子集样式
    // & .ivu-menu-submenu-title,
    // & .ivu-menu-item {
    //   padding-top: @space;
    //   padding-bottom: @space;
    // }
  }

  /deep/ .ivu-menu-submenu,
  /deep/ .ivu-menu-item {
    // 子集无icon - 即末项字体样式
    & .ivu-menu-item {
      font-weight: 400;
      font-size: 1.6vh;
    }
  }
}
</style>