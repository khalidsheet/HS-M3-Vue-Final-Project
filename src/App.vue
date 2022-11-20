<template>
  <div class="header">
    <div class="links w-1/2 flex justify-between">
      <router-link to="/" ref="about">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/">our team</router-link>
      <router-link to="/">contact</router-link>
    </div>
  </div>
  <router-view></router-view>
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
}
</style>
