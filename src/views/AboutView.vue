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
      <span class="text-xl font-bold text-emerald-400 tracking-wide mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
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

    <div class="flex flex-col md:flex-row items-center gap-12 mb-16 mt-8">
      <div class="w-full md:w-2/5 flex justify-center">
        <div
          class="relative group max-w-xs md:max-w-none w-full aspect-square rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/40 shadow-2xl"
        >
          <img
            src="http://localhost:3000/img/about.jpg?auto=format&fit=crop&w=600&q=80"
            alt="My Profile Portrait Picture"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div
            class="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/20 rounded-2xl transition-all duration-300 pointer-events-none"
          ></div>
        </div>
      </div>

      <div class="w-full md:w-3/5 space-y-8 text-center md:text-left md:pl-8">
        <span class="text-1xl font-bold text-gray-400 tracking-wide mt-8">Trust us</span>

        <h3 class="text-2xl font-bold text-white tracking-wide text-center">
          My Engineering Journey
        </h3>

        <p class="text-gray-400 text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contact Me Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
          dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </section>
</template>
