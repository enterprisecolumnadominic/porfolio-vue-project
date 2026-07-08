<script setup lang="ts">
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import ExperienceView from "./views/ExperienceView.vue";
import HomeView from "./views/HomeView.vue";
import TheFooter from "./views/TheFooter.vue";
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
      <ContactView />
    </main>
    <TheFooter />
  </div>
</template>
