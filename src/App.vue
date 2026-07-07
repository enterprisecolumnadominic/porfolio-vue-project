<script setup lang="ts">
import AboutView from "./views/AboutView.vue";
import ExperienceView from "./views/ExperienceView.vue";
import HomeView from "./views/HomeView.vue";
import TheNavbar from "./views/TheNavbar.vue";
</script>

<template>
  <div
    class="min-h-screen w-full bg-gray-950 text-gray-100 flex flex-col items-center p-0 font-sans antialiased"
  >
    <TheNavbar />

    <main class="w-full flex flex-col items-center">
      <HomeView />
      <AboutView />
      <ExperienceView />
    </main>
  </div>
</template>
