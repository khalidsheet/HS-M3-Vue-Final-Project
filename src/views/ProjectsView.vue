<script setup lang="ts">
import Hero from "../components/landing/Hero.vue";
import SectionTitle from "../components/shared/SectionTitle.vue";
import { useProjectsStore } from "../store/user";
import { storeToRefs } from "pinia";
import ProjectsList from "../components/projects/ProjectsList.vue";
import { onMounted, ref } from "vue";
const useProjects = useProjectsStore();

const API_CALL = "https://637399a8348e947299113d2a.mockapi.io/projects";
const projects = ref([]);

onMounted(async () => {
  projects.value = await (await fetch(API_CALL)).json();
  useProjects.setProjects(projects.value);
});
</script>
<template>
  <div class="safe-area">
    <div id="about" class="about">
      <SectionTitle>Our Projects Gallery</SectionTitle>
      <div class="description container m-auto text-center text-gray-400 mb-12">
        We are pleased to show to the world our fine work and beautiful projects
        that we work hard to get it done the right way!
      </div>

      <Suspense>
        <ProjectsList :projects="projects" />
      </Suspense>
    </div>
  </div>
</template>
<style scoped></style>
