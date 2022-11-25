<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useProjectsStore } from "../store/projects";
import { Project } from "../shared/interfaces/Project.interface";
const projectsStore = useProjectsStore();
const props = defineProps<{ id: string }>();
const projectDetails = ref<Project>();
const API_CALL = "https://637399a8348e947299113d2a.mockapi.io/projects";

onMounted(async () => {
  projectDetails.value = projectsStore.getSingleProject(props.id);

  if (!projectDetails.value) {
    projectDetails.value = await (
      await fetch(`${API_CALL}/${props.id}`)
    ).json();
  }
});
</script>
<template>
  <div class="safe-area">
    <div class="cover">
      <img :src="projectDetails?.image" class="cover-image" alt="" />
      <div class="shadow"></div>
    </div>
    <div class="content mt-6 px-10">
      <p class="text-7xl mb-16">{{ projectDetails?.name }}</p>
      <p class="description">
        {{ projectDetails?.description }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.cover {
  height: 400px;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
}
.cover img {
  @apply bg-center w-full;
  background-position-y: -2px;
}

.description {
  @apply text-2xl text-gray-400;
  line-height: 40px;
  font-weight: 100;
}

.shadow {
  width: 100%;
  height: 120px;
  background: linear-gradient(0deg, #030910, transparent);
  position: absolute;
  bottom: 0;
}
</style>
