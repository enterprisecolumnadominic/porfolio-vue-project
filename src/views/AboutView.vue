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
        Transforming a lifelong passion for software into scalable, production-ready web solutions.
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
            src="https://www.ibuild.ph/sites/default/files/features/web-designers-developers-and-digital-marketing-sevices-Metro-Manila-Philippines.jpg?auto=format&fit=crop&w=600&q=80"
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
        <span
          class="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 rounded-full uppercase shadow-sm"
        >
          <span class="w-2bg-emerald-400"></span>
          Continuous Delivery & Quality
        </span>

        <h3 class="text-2xl font-bold text-white tracking-wide text-center">
          My Engineering Journey
        </h3>

        <p class="text-gray-300 text-base leading-relaxed font-normal">
          For me, software development has never been just about writing lines of code—it is a
          continuous journey driven by relentless curiosity and a passion for growth. Over the past
          5+ years, every legacy system I modernized and every database bottleneck I solved taught
          me that true software craftsmanship lies in resilience and care. Bridging robust C# .NET
          Core backends with intuitive Vue 3 and React front end, while safeguarding quality through
          Playwright automation, aren't just technical milestones to me; they are lessons in how to
          build software people can truly rely on. I view engineering as a lifelong practice of
          learning, adapting, and elevating the human experience through technology.
        </p>
      </div>
    </div>
  </section>
</template>
