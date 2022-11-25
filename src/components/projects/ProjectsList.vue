<script setup lang="ts">
import { toRef } from "vue";
import ProjectCard from "./ProjectCard.vue";

const props = defineProps<{ projects: any[] }>();
const projects = toRef(props, "projects");
</script>

<template>
  <div class="grid grid-cols-6 gap-7 px-12">
    <ProjectCard v-for="project of projects" :project="project" />
  </div>
</template>
