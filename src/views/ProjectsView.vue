<script setup lang="ts">
import Hero from "../components/landing/Hero.vue";
import SectionTitle from "../components/shared/SectionTitle.vue";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const { fullname } = storeToRefs(userStore);
</script>
<template>
  <div class="safe-area">
    <div id="about" class="about">
      <SectionTitle>Our Projects Gallery {{ fullname }}</SectionTitle>
    </div>
  </div>
</template>
<style scoped></style>
