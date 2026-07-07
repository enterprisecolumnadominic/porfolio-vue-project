<!-- src/views/HomeView.vue -->
<template>
  <!--
    RESPONSIVE FIX:
    1. Changed global '-mt-30' to 'md:-mt-30' so the negative push up ONLY affects desktop.
    2. Added 'pt-24 pb-12 md:py-12' -> On mobile, it gives a safe 96px top buffer zone
       below the navbar, while cleanly reverting back to standard padding on desktop viewports.
  -->
  <section id="home" class="w-full max-w-6xl px-6 pt-10 pb-20 mx-auto">
    <!-- Content Constrainer Matrix Track -->
    <div
      class="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
    >
      <!-- LEFT SIDE: Text Column (Responsive Behavior Matrix) -->
      <!--
        Adjusted 'space-y-6 md:space-y-8' to tighten mobile text spacing slightly,
        maintaining clear reading focus on phones.
      -->
      <div class="flex flex-col space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
        <div class="space-y-3">
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Available for Freelance Work
          </span>
          <!-- Title adapts down gracefully to text-4xl on small glass surfaces -->
          <h1
            class="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none"
          >
            Hi, I'm Dominic.<br />
            Building modern web apps testing.
          </h1>
        </div>

        <div>
          <p class="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
            I am a full-stack developer focusing on crafting clean, responsive, and highly
            performant web applications using Vue 3 and Tailwind CSS.
          </p>
        </div>

        <!-- Call to Action Track Blocks -->
        <div class="flex items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href="#projects"
            class="px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold bg-emerald-500 text-gray-950 rounded-lg hover:bg-emerald-400 active:scale-95 transition cursor-pointer shadow-lg shadow-emerald-500/10"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            class="px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold bg-gray-900 text-gray-200 border border-gray-800 rounded-lg hover:bg-gray-800 active:scale-95 transition cursor-pointer"
          >
            Let's Talk
          </a>
        </div>
      </div>

      <!-- RIGHT SIDE: Image Column (Responsive Separation Layer) -->
      <div class="flex items-center justify-center order-1 md:order-2">
        <!--
          ADAPTIVE IMAGE SIZE CORRECTION:
          Changed height setting from fixed 'h-[400px]' to 'h-64 sm:h-80 md:h-[400px]'.
          This ensures the illustration container box collapses down to a proportional
          256px layout footprint on phone screens instead of swallowing up the entire screen height.
        -->
        <div
          class="relative w-full max-w-md h-64 sm:h-80 md:h-[400px] flex items-center justify-center"
        >
          <!-- Background Decorative Radial Glow (Responsive Blur scale) -->
          <div class="absolute inset-0 bg-emerald-500/10 blur-2xl md:blur-3xl rounded-full"></div>

          <!-- Illustration Target Placeholder Frame -->
          <div
            class="w-full h-full rounded-2xl border-2 border-dashed border-gray-800 flex flex-col items-center justify-center bg-gray-900/50 text-gray-500 p-6 shadow-2xl backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 text-emerald-500/60"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V6.75zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z"
              />
            </svg>
            <span class="text-xs md:text-sm font-mono">Hero Illustration Placement</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
