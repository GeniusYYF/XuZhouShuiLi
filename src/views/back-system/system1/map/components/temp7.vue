<template>
  <Card>
    <div slot="title">{{ title }}</div>
    <a href="#" slot="extra"> 更多 </a>
    <div></div>
  </Card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "XXX" },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>