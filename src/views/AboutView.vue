<!-- src/views/AboutView.vue -->
<script setup lang="ts">
import aboutDataRaw from "@/data/aboutData.json";

interface AboutItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const aboutItems: AboutItem[] = aboutDataRaw;
</script>

<template>
  <section id="about" class="w-full max-w-6xl px-6 pt-0 pb-20 mx-auto">
    <div class="text-center flex flex-col items-center mb-12">
      <h2 class="text-3xl font-black text-white tracking-tight sm:text-4xl">About Me</h2>
      <div class="h-1 w-12 bg-emerald-500 mt-2 rounded"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="item in aboutItems"
        :key="item.id"
        class="bg-gray-900/40 border border-gray-800/80 p-6 rounded-2xl shadow-xl backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-200 group flex flex-col items-center text-center"
      >
        <div
          class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200"
        >
          <img
            :src="item.icon"
            :alt="item.title + ' icon'"
            class="w-6 h-6 object-contain"
            loading="lazy"
          />
        </div>

        <h3 class="text-xl font-bold text-white mb-3 tracking-wide">
          {{ item.title }}
        </h3>

        <p class="text-gray-400 text-sm leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>
