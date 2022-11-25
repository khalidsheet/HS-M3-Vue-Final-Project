<script setup lang="ts">
import { onMounted } from "vue";
import Button from "./../shared/Button.vue";

onMounted(() => {
  const elements = document.querySelectorAll(".floating");
  document.addEventListener("scroll", (e) => {
    const documentTopPosition = document.documentElement.scrollTop;
    elements.forEach((e) => {
      const pos = e.clientWidth / 2;
      e.setAttribute(
        "style",
        `top: ${pos - documentTopPosition * 0.7}px !important`
      );
    });
  });
});
</script>
<template>
  <div class="landing">
    <svg xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="6.08"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>

      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
    <div class="icons">
      <img src="./../../assets/cube.png" class="floating" alt="" />
      <img src="./../../assets/cube-2.png" class="floating" alt="" />
      <img src="./../../assets/triangle.png" class="floating" alt="" />
    </div>
    <div class="-rotate-3">
      <div class="text-8xl res">A Creative</div>
      <div class="text-8xl res">Software Company</div>
      <div class="text-3xl res mt-6 font-thin text-gray-300">
        Think outside the box.
      </div>
    </div>
    <div class="actions z-30 absolute bottom-24">
      <Button class="accent ml-3" @click="$router.push('projects')"
        >Explore our Projects</Button
      >
    </div>
  </div>
</template>
<style scoped>
.landing {
  @apply flex items-center justify-center flex-col;
  width: 100vw;
  height: 70vh;
  background: #030910;
  filter: contrast(100%) brightness(80%);
  background: linear-gradient(120deg, #030910 7%, #3c4783 70%, #b344f3 100%);
  position: relative;
  overflow: hidden;
}

.floating {
  @apply absolute top-0 left-0;
}

.floating:nth-child(1) {
  width: 150px;
  top: 80px;
  left: 200px;
  animation: floating 3000ms ease-in 0ms infinite forwards alternate;
}

.floating:nth-child(2) {
  width: 400px;
  top: 20vh;
  left: 70vw;
  animation: bouncing 2000ms ease-in-out 200ms infinite forwards alternate;
}

.floating:nth-child(3) {
  width: 500px;
  top: 20vh;
  left: 15vw;
  opacity: 0.4;
}

.landing svg {
  position: absolute;
  top: 0;
  left: 0;
  height: inherit;
  width: inherit;
  opacity: 0.2;
}

@keyframes bouncing {
  0% {
    top: 20vh;
  }

  50% {
    top: 21vh;

    transform: rotate(10deg);
  }

  100% {
    top: 20vh;
    transform: rotate(-10deg);
    filter: grayscale(0.2);
  }
}

@keyframes floating {
  0% {
    left: 80px;
    top: 200px;
  }

  100% {
    left: 80px;
    top: 220px;
  }
}
</style>
