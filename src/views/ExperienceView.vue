<!-- src/views/ExperienceView.vue -->
<script setup lang="ts">
import experienceDataRaw from "@/data/experienceData.json";

// Define the TypeScript shape mapping our new JSON file keys
interface WorkExperience {
  id: string;
  title: string;
  company: string;
  year: string;
  description: string;
}

const experiences: WorkExperience[] = experienceDataRaw;
</script>

<template>
  <section id="experience" class="w-full max-w-6xl px-6 pb-20 mx-auto">
    <div class="text-center flex flex-col items-center mb-12">
      <h2 class="text-3xl font-black text-white tracking-tight sm:text-4xl">Work Experience</h2>
      <span class="text-xl font-bold text-emerald-400 tracking-wide mt-3"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
      >
      <div class="h-1 w-12 bg-emerald-500 mt-2 rounded"></div>
    </div>

    <div class="space-y-4">
      <div class="flex flex-wrap justify-center -mx-4">
        <div
          v-for="exp in experiences.slice(0, 2)"
          :key="exp.id"
          class="w-full md:w-[calc(50%-2rem)] m-4 bg-gray-900/40 border border-gray-800/80 p-6 rounded-2xl shadow-xl backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-200 group flex flex-col justify-between"
        >
          <div>
            <div class="mb-4">
              <span
                class="inline-flex text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/10"
              >
                {{ exp.year }}
              </span>
            </div>

            <div class="mb-4">
              <h3 class="text-xl font-bold text-white tracking-wide">
                {{ exp.title }}
              </h3>
              <p class="text-sm font-medium text-emerald-500/80 mt-0.5">
                {{ exp.company }}
              </p>
            </div>

            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              {{ exp.description }}
            </p>

            <div
              class="w-full h-7 bg-gray-950 rounded-full overflow-hidden border border-gray-800/50 relative mt-4"
            >
              <div
                class="h-full bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.2)] w-[90%] flex items-center pl-3"
              >
                <span
                  class="text-gray-950 font-mono text-[10px] font-black uppercase tracking-wider whitespace-nowrap"
                >
                  {{ exp.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div
          v-for="exp in experiences.slice(2, 10)"
          :key="exp.id"
          class="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] m-4 bg-gray-900/40 border border-gray-800/80 p-6 rounded-2xl shadow-xl backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-200 group flex flex-col justify-between"
        >
          <div>
            <div class="mb-4">
              <span
                class="inline-flex text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/10"
              >
                {{ exp.year }}
              </span>
            </div>

            <div class="mb-4">
              <h3 class="text-xl font-bold text-white tracking-wide">
                {{ exp.title }}
              </h3>
              <p class="text-sm font-medium text-emerald-500/80 mt-0.5">
                {{ exp.company }}
              </p>
            </div>

            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              {{ exp.description }}
            </p>

            <div
              class="w-full h-7 bg-gray-950 rounded-full overflow-hidden border border-gray-800/50 relative mt-4"
            >
              <div
                class="h-full bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.2)] w-[80%] flex items-center pl-3"
              >
                <span
                  class="text-gray-950 font-mono text-[10px] font-black uppercase tracking-wider whitespace-nowrap"
                >
                  {{ exp.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
