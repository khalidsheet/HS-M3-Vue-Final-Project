<script setup lang="ts">
import { Project } from "../../shared/interfaces/Project.interface";

const props = defineProps<{ project: Project }>();
</script>

<template>
  <div class="container">
    <router-link :to="`/projects/${project.id}`">
      <div class="image-container border-gray-500">
        <img :src="project.image" alt="" />
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.image-container img {
  border-radius: 10px;
}
</style>
