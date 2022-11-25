<script setup lang="ts">
import Hero from "../components/landing/Hero.vue";
import SectionTitle from "../components/shared/SectionTitle.vue";
import { onMounted, ref } from "vue";
import { useProjectsStore } from "../store/user";
import { Project } from "../shared/interfaces/Project.interface";
import { useRouter } from "vue-router";

const projectsStore = useProjectsStore();
const props = defineProps<{ id: string }>();
const projectDetails = ref<Project>();
const router = useRouter();

onMounted(() => {
  projectDetails.value = projectsStore.getSingleProject(props.id);

  // Go back to projects view if the state is undefined
  if (!projectDetails.value) {
    router.back();
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
