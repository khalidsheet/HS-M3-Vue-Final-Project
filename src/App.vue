<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const header = document.querySelector(".header");
  document.addEventListener("scroll", () => {
    const scrollPosition = document.documentElement.scrollTop;

    if (scrollPosition > 400) {
      header?.setAttribute("style", "backdrop-filter: blur(10px)");
    } else {
      header?.setAttribute("style", "background: transparent");
    }
  });
});
</script>
<template>
  <div class="header">
    <div class="links w-1/2 flex justify-around">
      <router-link to="/" ref="about">Home</router-link>
      <router-link to="/projects">Projects</router-link>
    </div>
  </div>
  <router-view></router-view>
  <div class="footer flex p-6 justify-center">
    All rights reserved &copy; 2022
  </div>
</template>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 60px;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid transparent;
  @apply border-gray-600 font-thin uppercase text-white;
  backdrop-filter: blur(20px);
}
</style>
