<script setup lang="ts">
defineProps<{ title: string; description: string; image: string }>();
</script>
<template>
  <div class="card w-80">
    <div class="img">
      <img :src="image" alt="" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="description text-gray-500 px-5">{{ description }}</div>
  </div>
</template>
<style scoped>
.img {
  width: 124px;
  float: left;
  margin-right: 10px;
}
</style>
