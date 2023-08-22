<template>
  <div v-for="a in blogData" :key="a" :post="a">
    <div class="card shadow mb-3">
      <div class="card-header">{{ a.number }}. {{ a.date }}</div>
      <div class="card-body">
        <h5
          @click="$router.push(`detail/${a.number}/comment`)"
          class="card-title"
        >
          {{ a.title }}
        </h5>
        <p class="card-text">
          {{ a.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    blogData: Array,
  },
};
</script>

<style></style>
