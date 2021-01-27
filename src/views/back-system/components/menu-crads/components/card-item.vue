<template>
  <div class="card-item">
    <Icon v-if="icon" class="icon" :type="icon" />
    <span class="title">{{ title }}</span>
    <span v-if="title !== '我的主页'" class="close">×</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
      type: String,
    },
    icon: {
      default: "",
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.card-item {
  display: inline-block;
  position: relative;
  vertical-align: bottom;
  height: @back-menu-cards-item-height;
  line-height: @back-menu-cards-item-height;
  padding: 0 15px;
  margin: 0 1px -1px;
  background-color: #e6f3fa;
  border: 1px solid #dadfe4;
  border-radius: 5px 5px 0px 0px;

  &:hover {
    cursor: pointer;
    background-color: rgba(230, 243, 250, 0.6);
  }

  .title {
    font-size: 1vh;
    margin: 0 5px;
  }

  .close {
    position: absolute;
    line-height: 1;
    right: 5px;
    top: 0;
    color: #bfc5ca;
  }

  .icon,
  .close {
    font-size: 2.5vh;
  }
}
</style>