<template>
  <div class="cards">
    <CardItem
      v-for="(item, i) in openMenus"
      :key="i"
      :title="item.title"
      :icon="item.icon"
    />
  </div>
</template>

<script>
import CardItem from "./components/card-item";

export default {
  components: { CardItem },
  computed: {
    openMenus() {
      return this.$store.getters["back/getOpenMenus"];
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.cards {
  position: relative;
  height: @back-menu-cards-height;
  line-height: @back-menu-cards-height;
  background-color: #fff;
  border-bottom: 1px solid #ced4d5;
  padding: 0 10px;
  text-align: left;
  color: #666;
}
</style>