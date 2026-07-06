<!-- src/views/TheNavbar.vue -->
<template>
  <!--
    HORIZONTAL ALIGNMENT MODIFICATION:
    Changed 'max-w-4xl' to 'max-w-6xl' to expand the tracking width
    and match the exact proportions of your updated Hero Banner section.
  -->
  <nav class="w-full max-w-6xl px-6 h-16 flex items-center justify-between">
    <!-- LEFT SIDE: Brand Logo Block -->
    <div class="flex items-center space-x-3">
      <img alt="Vue logo" src="@/assets/logo.svg" width="32" height="32" class="object-contain" />
      <a
        href="#"
        class="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition tracking-wide leading-none"
      >
        Logo.dev
      </a>
    </div>

    <!-- CENTER TRACK: Secondary Navigation Links -->
    <div class="flex items-center space-x-8">
      <a
        href="#"
        class="text-emerald-400 font-semibold transition duration-150 tracking-wider text-xs sm:text-sm"
      >
        Home
      </a>
      <a
        href="#about"
        class="text-gray-300 hover:text-emerald-400 transition duration-150 tracking-wider text-xs sm:text-sm"
      >
        About
      </a>
      <a
        href="#projects"
        class="text-gray-300 hover:text-emerald-400 transition duration-150 tracking-wider text-xs sm:text-sm"
      >
        Projects
      </a>
    </div>

    <!-- RIGHT SIDE: Primary Action CTA -->
    <div class="hidden sm:block">
      <button
        type="button"
        class="text-sm font-semibold bg-emerald-500 text-gray-950 px-4 py-2 rounded-lg hover:bg-emerald-400 active:scale-95 transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
      >
        Hire me
      </button>
    </div>
  </nav>
</template>
