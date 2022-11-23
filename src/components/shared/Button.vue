<template>
  <button class="button">
    <slot />
  </button>
</template>
<style scoped>
.button {
  @apply w-auto h-12 border border-gray-600 px-6 
            rounded-full text-gray-100 font-light 
            hover:bg-[#05101c] hover:font-normal 
            transition-all duration-100 hover:px-8 cursor-pointer;
  background-color: transparent;
}

.accent {
  @apply border-gray-300;
}

.link {
  border: none;
}
</style>
