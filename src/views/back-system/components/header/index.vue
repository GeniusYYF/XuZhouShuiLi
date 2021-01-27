<template>
  <Row>
    <Menu class="header" mode="horizontal" theme="dark" active-name="1">
      <Col :xl="{ span: 9 }" :xxl="{ span: 9 }" class="title">
        <li class="title-wrapper">
          <img
            class="logo"
            :src="require(`@/assets/back-system/header/title.png`)"
          />
        </li>
      </Col>
      <Col :xl="{ span: 11 }" :xxl="{ span: 11 }">
        <MenuItem name="1" class="header-item" :to="'/back-system/homepage'">
          <!-- 因下划线需要被span包裹 -->
          <span>首页</span>
        </MenuItem>
        <MenuItem name="2" class="header-item">
          <span>一级导航</span>
        </MenuItem>
        <MenuItem name="3" class="header-item">
          <span>一级导航</span>
        </MenuItem>
        <MenuItem name="4" class="header-item">
          <span>一级导航</span>
        </MenuItem>
        <MenuItem name="5" class="header-item">
          <span>一级导航</span>
        </MenuItem>
        <MenuItem name="6" class="header-item">
          <span>一级导航</span>
        </MenuItem>
      </Col>
      <Col :xl="{ span: 4 }" :xxl="{ span: 4 }" class="tool">
        <li class="tool-wrapper">
          <img :src="require(`@/assets/back-system/header/search.png`)" />
          <img :src="require(`@/assets/back-system/header/msg.png`)" />
          <img
            :src="require(`@/assets/back-system/header/share.png`)"
            @click="$router.push('/')"
          />
          |
          <Avatar :src="require(`@/assets/back-system/header/avatar.png`)" />
        </li>
      </Col>
    </Menu>
  </Row>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  height: @back-header-height;
  background: url("../../../../assets/back-system/header/background.png")
    no-repeat;
  background-size: 100% 100%;

  .ivu-col {
    height: 100%;
    overflow: hidden;
    text-align: left;
    &.title {
      .logo {
        height: 4vh;
        width: 30.5vw;
        vertical-align: middle;
        margin-left: 1vw;
      }
    }

    .title-wrapper,
    .header-item,
    .tool-wrapper {
      line-height: @back-header-height;
    }

    .header-item {
      margin: 0 1.5vw;
      padding: 0;
      display: inline-block;
      position: relative;
      color: @theme-grey;
      // 因需求需要隐藏自带下划线
      &.ivu-menu-item-active,
      &:hover {
        color: @theme-white;
        border-bottom-color: transparent;
      }
      // 因需求需要自制下划线
      &.ivu-menu-item-active::after,
      &:hover::after {
        border-bottom: 3px solid @theme-white;
      }
      &::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 100%;
        bottom: 2.2vh;
        display: block;
      }
      // 字体
      span {
        font-family: "PingFangBold";
        line-height: 1.5;
        font-size: 2vh;
        vertical-align: middle;
        display: inline-block;
      }
    }

    &.tool {
      height: inherit;
      text-align: center;
      img {
        vertical-align: middle;
        margin-right: 1.7vw;
        height: 2.5vh;
        width: 2.5vh;

        &:hover {
          cursor: pointer;
          // color: rgba(@theme-grey, 0.7);
        }
      }
      .ivu-avatar {
        margin-left: 1.7vw;
        height: 4vh;
        width: 4vh;
      }
    }
  }
}
</style>