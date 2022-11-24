<script setup lang="ts">
import Hero from "../components/landing/Hero.vue";
import SectionTitle from "../components/shared/SectionTitle.vue";
import Divider from "../components/shared/Divider.vue";
import DoCard from "../components/shared/DoCard.vue";
</script>
<template>
  <Hero />

  <div id="about" class="about py-10 overflow-hidden">
    <img
      src="./../assets/wireframe-sphere.png"
      class="absolute -left-10 animate-spin wireframe"
    />
    <SectionTitle>About Us</SectionTitle>
    <div
      class="flex items-center w-3/4 m-auto text-2xl text-gray-300 font-thin text-justify"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi
      numquam eos quibusdam mollitia voluptas vero possimus illum excepturi
      autem sit maiores suscipit blanditiis, ipsam consectetur ad iusto repellat
      maiores suscipit blanditiis, ipsam consectetur ad iusto repellat
      reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      consectetur adipisicing elit. Culpa sequi numquam eos quibusdam mollitia
      voluptas vero possimus illum excepturi autem sit maiores suscipit
      blanditiis, ipsam consectetur ad iusto repellat reprehenderit.
    </div>
  </div>
  <Divider />
  <div class="what-we-do py-36">
    <SectionTitle>What we do?</SectionTitle>
    <div class="description text-center mb-12 text-gray-400">
      We always like to give our customer the best in field products by
      following the best guidlines and latest technologies out there in the
      world
    </div>
    <div class="container flex m-auto flex-wrap">
      <DoCard
        class="flex-1"
        title="Sales Increasing"
        description="You don't need to think about your sales anymore, we will handle all your sales, product by product."
        image="./../src/assets/salesman-indicating-sales-growth.png"
      />
      <DoCard
        class="flex-1"
        title="Mobile Development"
        description="Do you need an application for your business? we got you! start pitching you ideas to us and we will deliver your application as quick as possible."
        image="./../src/assets/mobile-in-hand.png"
      />

      <DoCard
        class="flex-1"
        title="Web Development"
        description="Do you need a website for your business? we got you! Tell what you do and what's your audience and we will do the rest."
        image="./../src/assets/web-template.png"
      />
    </div>
  </div>
  <Divider />
  <div class="what-we-do py-12 bg-white">
    <SectionTitle class="text-gray-900">Our trusted clients</SectionTitle>
    <div class="description text-center mb-12 text-gray-400">
      We support the big compaines to grow more, we even help startups to start
      making revenue
    </div>
    <div class="container flex m-auto flex-wrap justify-between compaines">
      <img class="flex-1" src="../assets/compaines/facebook.png" alt="" />
      <img class="flex-1" src="../assets/compaines/github.png" alt="" />
      <img class="flex-1" src="../assets/compaines/instagram.png" alt="" />
      <img class="flex-1" src="../assets/compaines/linkedin.png" alt="" />
      <img class="flex-1" src="../assets/compaines/snapchat.png" alt="" />
      <img class="flex-1" src="../assets/compaines/telegram.png" alt="" />
      <img class="flex-1" src="../assets/compaines/youtube.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.about {
  position: relative;
}
.wireframe {
  left: -40vw;
  top: calc(400px - 50vh);
  z-index: 54 !important;
  opacity: 0.14;
  animation-duration: 12000ms;
}
.compaines img {
  max-width: 128px !important;
  opacity: 0.4;
  cursor: pointer;
  transition: all 100ms ease-in-out;
}

.compaines img:hover {
  opacity: 1;
}
</style>
