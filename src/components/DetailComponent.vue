<template>
  <h4>디테일 입니다</h4>
  <h5>{{ blogData[$route.params.id].title }}</h5>
  <p>{{ blogData[$route.params.id].content }}</p>
  <router-view></router-view>
</template>

<script>
export default {
  name: "DetailComponent",
  props: {
    blogData: Array,
  },
};
</script>

<style></style>
